import { useState } from "react";
function App() {
  const initialState = ["apple", "banana", "cherry", "date", "elderberry"];
  const [array, setArray] = useState(initialState);
  const [result, setResult] = useState(""); // 결과값
  const [query, setQuery] = useState(""); // input을 위한 value

  const handleReset = function () {
    window.location.replace("/main");
  }

  const handleForEach = function () {
    let temp = "";
    array.forEach(function (item, index) {
      temp += `${index}: ${item} / `;
    });
    setResult(temp);
  };

  const handleFilter = function () {
    const filtered = array.filter((item, index) => item.includes(query));
    setResult(filtered.join(", "));
  };

  const handleMap = function () {
    const mapped = array.map(function(item, index){
      return item.toUpperCase();
    });
    setResult(mapped.join(", "));
  };

  const handleReduce = function () {
    const reduced = array.reduce(function(acc, cur){
      return `${acc}+ ${cur}`;
    })
    console.log(reduced);
    setResult(reduced);
  };

  const handlePush = function () {
    if (query.length <= 0) {
      alert("값을 입력해주세요");
      return false;
    }
    const newArr = [...array, query];
    setArray(newArr);
    setResult(newArr.join("," ));
  };

  const handlePop = function () {
    // 원본 배열을 통해 Pop한 값을 변수에 저장
    const newArr = [...array];
    newArr.pop();
    // setArray 한다.
    setArray(newArr);
    // Array를 기반으로 result 생성.
    setResult(newArr.join(", "));
  };

  const handleSlice = function () {
    // 원본 배열을 통해 slice한 값을 변수에 저장
    const newArr = [...array];
    const slicedArr = newArr.slice(1, 4);
    // setArray를 한다.
    setArray(slicedArr);
    // Array를 기반으로 result 생성.
    setResult(slicedArr.join(", "));
  }

  const handleSplice = function () {
    // 원본 배열을 통해 splice한 값을 변수에 저장//
    const newArr = [...array];
    newArr.splice(2, 2, "kiwi", "lime");
    // setArray를 한다.
    setArray(newArr);
    // Array를 기반으로 result 생성.
    setResult(newArr.join(", "));
  }

  const handleIndexOf = function () {
    // array.indexOf(searchvalue, position), 대소문자 구분
    const newArr = [...array];
    const newIndexOf = newArr.indexOf(query); // -1
    newArr.indexOf(query);
    setQuery(query);
    setResult(newIndexOf);
  }

  const handleIncludes = function () {
    // array.includes(searchvalue) 
    const newArr = [...array];
    const includesResult = newArr.includes(query); // true or false
    if (includesResult === true ) {
      setQuery(query);
      return setResult("true");
    } else {
      setQuery(query);
      return setResult("false");
    }
    // newArr.includes(query);
    // setQuery(query);
    // setResult(includesResult);
  }

  const handleFind = function () {
    // array.find()  // filter과 기능은 같지만 조건에 맞는 첫번째 요소만 반환
    const newArr = [...array];
    const foundItem = newArr.find(function(element){
        return element.includes(query); // newArr 배열의 요소가 입력값에 포함되는지, 요소가 반환
      });
    if(foundItem){ //foundItem 이 있다면
      return setResult(foundItem);
    } else {
      return setResult("Not Found");
    }
  }

  const handleSome = function () {
    // 각 요소가 input의 value(query)를 포함하고 있는 경우 true를 반환하도록 구현
    const newArr = [...array];
    const someArr = newArr.some(function(element){
      return element.includes(query);
    });

    console.log("someArr", someArr); // true
    if(someArr == true){
      setResult("true");
    }
  }

  const handleEvery = function () {
    // 배열의 모든 요소가 제공된 함수로 구현된 테스트를 통과하는지 테스트함. 불리언반환
    // 각 요소가 모두 2글자 이상의 길이를 가진 경우 true를 반환하도록 구현
    const newArr = [...array];
    const everyElements = newArr.every(function(element){
      return element.length >= 2;
    });

    // console.log(everyElements); // true
    // setResult("true");

    if(everyElements == true){
      setResult("true");
    }
  }


  const handleSort = function () {
    const newArr = [...array];
    const sortArr = newArr.sort();
    setResult(sortArr.join(", "));
  }


  const handleJoin = function () {
    const newArr = [...array];
    const joinArr = newArr.join("/ ");
    setResult(joinArr);
  }


  return (
    <div
      style={{
        display : "flex",
        flexDirection : "column",
        alignItems : "center",
        justifyContent : "center",
      }}>
      <h1>Standard반 배열 API 테스트 : 이하민</h1>
      <input
        value={query}
        onChange={function (e) {
          setQuery(e.target.value);
        }}
      />
      <div>
        <button onClick={handleReset}
          style={{
            color : "white",
            backgroundColor : "black",
            cursor : "pointer",
          }}>Reset
        </button>
        <button onClick={handleForEach}>forEach</button>
        <button onClick={handleFilter}>filter</button>
        <button onClick={handleMap}>map</button>
        <button onClick={handleReduce}>reduce</button>
        <button onClick={handlePush}>push</button>
        <button onClick={handlePop}>pop</button>
        <button onClick={handleSlice}>slice</button>
        <button onClick={handleSplice}>splice</button>
        <button onClick={handleIndexOf}>indexOf</button>
        <button onClick={handleIncludes}>includes</button>
        <button onClick={handleFind}>find</button>
        <button onClick={handleSome}>some</button>
        <button onClick={handleEvery}>every</button>
        <button onClick={handleSort}>sort</button>
        <button onClick={handleJoin}>join</button>
      </div>
      <div 
        style={{
          display : "flex",
          flexDirection : "column",
          alignItems : "center",
          justifyContent : "center",
          border : "black solid 1px",
          width : "80%",
          height : "5rem",
          margin : "10px",
          padding : "10px",
        }}>
        <h3>원본배열</h3>
        <p>{array.join(", ")}</p>
      </div>
      <div
        style={{
          display : "flex",
          flexDirection : "column",
          alignItems : "center",
          justifyContent : "center",
          border : "black solid 1px",
          width : "80%",
          height : "5rem",
          margin : "10px",
          padding : "10px",
        }}>
        <h3>결과물</h3>
        <p style={{
          color : "green",
        }}>{result}</p>
      </div>
    </div>
  );
}
export default App;






