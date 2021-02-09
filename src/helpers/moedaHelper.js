export default function formatReal(str) {
  const int = parseInt(str.replace(/[\D]+/g, ""));
  let moeda = int + "";
  moeda = moeda.replace(/([0-9]{2})$/g, ",$1");
  if (moeda.length > 6) {
    moeda = moeda.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
  }
  
  return moeda;
}
