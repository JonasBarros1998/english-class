import React, { useEffect, useState } from 'react';
import { Image, Text, View } from "react-native";
import { Button, useTheme } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialIcons";
import {stylessheet} from "./style/styles";
import {searchListOnFlashCard} from "./use-cases/manager-flash-cards"
import { List } from '@global/interfaces/Card';
import { redirectToResultFlashCard } from './routes/routes';
import { ResultFlashCard } from '@global/interfaces/FlashCard';
import { dispatchToResultFlashCard } from './use-cases/store/dispatch';
//import { ResultFlashCards } from './ResultFalshCards';

export default function FlashCards({navigation, route}: any) {

  const themeStyles = useTheme();
  const styles = stylessheet(themeStyles);
  const params = route.params as {flashCardId: string};
  const [flashCardList, setFlashCardList] = useState<List>();
  const [loading, setLoading] = useState<boolean>(true);
  const [renderResultComponent, setRenderResultComponent] = useState<boolean>(false);
  const [results, setResults] = useState({error: 0, correct: 0});
  const [currentCard, setCurrentCard] = useState(0);
  const totalOfCards = flashCardList?.cardsOfList.length as number;

  useEffect(() => {
    searchListOnFlashCard(params.flashCardId)
      .then(function(resp) {
        setFlashCardList(resp);
        setLoading(false);
      });
  }, [params.flashCardId]);


  function renderResults(params: ResultFlashCard) {
    setResults({error: params.error, correct: params.correct})
  }

  function changeCard(params: ResultFlashCard) {
    const isLastCard = currentCard === (totalOfCards - 1);

    if(isLastCard === false) {
      setCurrentCard(currentCard + 1);
    };
    renderResults(params);
  }


  function redirectToResultScreen(result: ResultFlashCard) {
    if (currentCard + 1 === flashCardList?.cardsOfList.length) {
      const sendResult = {correct: result.correct, error: result.error};
      setResults(sendResult);
      setRenderResultComponent(true);
      dispatchToResultFlashCard(sendResult);
      //redirectToResultFlashCard(navigation);
    }

  }

  
  return (

    loading === true ? (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Carregando listas...</Text>
      </View>
     ) : (
      <>
        <Header list={flashCardList as List} results={results}/>
        {
          renderResultComponent === false ? (
            <View style={{...styles.container}}>
              <View style={{...styles.flashCard}}>
                <Text style={{...styles.flashCardText}}>{flashCardList?.cardsOfList[currentCard].word}</Text>
              </View>
  
              <View style={{...styles.buttons}}>
                <Button 
                  mode="contained" 
                  labelStyle={{
                    ...styles.buttonsText
                  }} 
                  style={{
                    ...styles.dontknowVocabularyButton
                  }}
                  onPress={() => {
  
                    changeCard({
                        error: results.error + 1,
                        correct: results.correct
                      });
  
                      redirectToResultScreen({
                        error: results.error + 1,
                        correct: results.correct
                      });
  
                  }}>
                  não conheço
                </Button>
  
                <Button 
                  mode="contained"
                  labelStyle={{
                    ...styles.buttonsText
                  }}
                  style={{
                    ...styles.knowVocabularyButton
                  }}
                  onPress={() => {
  
                    changeCard({
                      error: results.error,
                      correct: results.correct + 1
                    });
  
                    redirectToResultScreen({
                      error: results.error,
                      correct: results.correct + 1
                    });
                  }}
                  >
                  conheço
                </Button>
              </View>
  
            </View>
          ) : (
            <>
              <Image
                style={{
                  width: 400,
                  height: 400,
                }}
                source={{
                  uri: 'https://firebasestorage.googleapis.com/v0/b/app-english-class.appspot.com/o/static%2Fsuccess.jpg?alt=media&token=56c1d7c1-dbec-46d3-a54a-cf4e0f4a9462',
                }}
              />
              <Text style={{
                ...styles.listEmptyTitle,
                textAlign: 'center'
              }}>Parabéns</Text>
              <Text style={{
                ...styles.listEmptyDescribe
              }}>agora que você finalizou, escolha outra lista para continuar seus estudos</Text>
              <View style={{
                ...styles.buttonContainer
              }}>
                <Button 
                  mode='contained'
                  onPress={() => redirectToResultFlashCard(navigation)}
                  style={{...styles.resultListButton}}>
                  OK
                </Button>
              </View>
            </>
          )
        }

      </>
      )
  );
}

function Header(params: {results: ResultFlashCard, list: List}) {

  const themeStyles = useTheme();
  const styles = stylessheet(themeStyles);

  return (
    <View style={{
      ...styles.container
    }}>
      <View style={{
        ...styles.results
      }}>
        <View>
          <Icon name='circle' size={14} color={'#5240D6'}  style={{...styles.resultsIcon}}></Icon>
          <Text style={{...styles.resultsText}}>Estudar</Text>
          <Text style={{...styles.resultsTextNumber}}>{params.results.error}</Text>
        </View>

        <View>
          <Icon name='circle' size={14} color={'#D9D9D9'} style={{...styles.resultsIcon}}></Icon>
          <Text style={{...styles.resultsText}}>Total</Text>
          <Text style={{...styles.resultsTextNumber}}>{params.list.cardsOfList.length}</Text>
        </View>

        <View>
          <Icon name='circle' size={14} color={'#4FC690'}  style={{...styles.resultsIcon}}></Icon>
          <Text style={{...styles.resultsText}}>Corretos</Text>
          <Text style={{...styles.resultsTextNumber}}>{params.results.correct}</Text>
        </View>
      </View>
    </View>
  )
}