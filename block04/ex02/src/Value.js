// Value.js:

export default function Value({conversion, eur}) {
  const usdConversion=()=>{
      return(eur * conversion)
  }
return (
  <h1>{usdConversion()}</h1>
)
}

