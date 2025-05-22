const arr=[ 'mango','apple','grapes','guava'];
function app(){
  let choice = arr[Math.floor(Math.random() * 4)];
  return (
    
    <p> hello this is {choice} fruit</p>
  )

}
export default app;