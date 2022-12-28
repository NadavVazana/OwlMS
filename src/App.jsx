
export const App = ()=> {
  
  let getTime =  () =>{
    return new Date().now()
  }
  return (
    <section className="App">
      {getTime}
    </section>
  );
}
class test{
  static name ='nadav'
  lala = 'mama'
  
} 

console.log(test.name);
console.log(new test().lala)




