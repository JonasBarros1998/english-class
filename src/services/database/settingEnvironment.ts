export default function settingEnvironment(connectionString: string) {
  if (process.env.NODE_ENV === 'production') {
    return connectionString;
  }

  return `${process.env.NODE_ENV}/${connectionString}`;
}
