export default function replace_quotes(json) {
  stringJSON = JSON.stringify(json)
  formattedJSON = stringJSON.replace("'", "''")
  return formattedJSON;
};