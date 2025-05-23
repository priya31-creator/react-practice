let CurrentTime =() => {
  let time= new Date();
  return <p className="fs-3"> This is the current time: {time.toLocaleDateString()} - {time.toLocaleTimeString()}</p>
}
export default CurrentTime;