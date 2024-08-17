import { useState } from "react";
function App() {
  const initialState = ["apple", "banana", "cherry", "date", "elderberry"];
  const [array, setArray] = useState(initialState);
  const [result, setResult] = useState(""); // Result
  const [query, setQuery] = useState(""); // a value for input
  const [clickedButtonLabel, setClickedButtonLabel] = useState("");

  const handleReset = function () {
    window.location.replace("/main");
  };

  const handleForEach = function (label) {
    let temp = "";
    array.forEach(function (item, index) {
      temp += `${index}: ${item} / `;
    });
    setResult(temp);
    setClickedButtonLabel(label);
  };

  const handleFilter = function (label) {
    const filtered = array.filter((item, index) => item.includes(query));
    setResult(filtered.join(", "));
    setClickedButtonLabel(label);
  };

  const handleMap = function (label) {
    const mapped = array.map(function (item, index) {
      return item.toUpperCase();
    });
    setResult(mapped.join(", "));
    setClickedButtonLabel(label);
  };

  const handleReduce = function (label) {
    const reduced = array.reduce(function (acc, cur) {
      return `${acc}+ ${cur}`;
    });
    console.log(reduced);
    setResult(reduced);
    setClickedButtonLabel(label);
  };

  const handlePush = function (label) {
    setClickedButtonLabel(label);
    if (query.length <= 0) {
      alert("Enter an input please.");
      return false;
    }
    const newArr = [...array, query];
    setArray(newArr);
    setResult(newArr.join(","));
  };

  const handlePop = function (label) {
    // 원본 배열을 통해 Pop한 값을 변수에 저장
    const newArr = [...array];
    newArr.pop();
    // setArray 한다.
    setArray(newArr);
    // Array를 기반으로 result 생성.
    setResult(newArr.join(", "));
    setClickedButtonLabel(label);
  };

  const handleSlice = function (label) {
    // 원본 배열을 통해 slice한 값을 변수에 저장
    const newArr = [...array];
    const slicedArr = newArr.slice(1, 4);
    // setArray를 한다.
    setArray(slicedArr);
    // Array를 기반으로 result 생성.
    setResult(slicedArr.join(", "));
    setClickedButtonLabel(label);
  };

  const handleSplice = function (label) {
    // 원본 배열을 통해 splice한 값을 변수에 저장//
    const newArr = [...array];
    newArr.splice(2, 2, "kiwi", "lime");
    // setArray를 한다.
    setArray(newArr);
    // Array를 기반으로 result 생성.
    setResult(newArr.join(", "));
    setClickedButtonLabel(label);
  };

  const handleIndexOf = function (label) {
    // array.indexOf(searchvalue, position), 대소문자 구분
    const newArr = [...array];
    const newIndexOf = newArr.indexOf(query); // -1
    newArr.indexOf(query);
    setQuery(query);
    setResult(newIndexOf);
    setClickedButtonLabel(label);
  };

  const handleIncludes = function (label) {
    // array.includes(searchvalue)
    setClickedButtonLabel(label);
    const newArr = [...array];
    const includesResult = newArr.includes(query); // true or false
    if (includesResult === true) {
      setQuery(query);
      return setResult("true");
    } else {
      setQuery(query);
      return setResult("false");
    }
    // newArr.includes(query);
    // setQuery(query);
    // setResult(includesResult);
  };

  const handleFind = function (label) {
    setClickedButtonLabel(label);
    // array.find()  // filter과 기능은 같지만 조건에 맞는 첫번째 요소만 반환
    const newArr = [...array];
    const foundItem = newArr.find(function (element) {
      return element.includes(query); // newArr 배열의 요소가 입력값에 포함되는지, 요소가 반환
    });
    if (foundItem) {
      //foundItem 이 있다면
      return setResult(foundItem);
    } else {
      return setResult("Not Found");
    }
  };

  const handleSome = function (label) {
    setClickedButtonLabel(label);
    // 각 요소가 input의 value(query)를 포함하고 있는 경우 true를 반환하도록 구현
    const newArr = [...array];
    const someArr = newArr.some(function (element) {
      return element.includes(query);
    });

    console.log("someArr", someArr); // true
    if (someArr == true) {
      setResult("true");
    }
  };

  const handleEvery = function (label) {
    setClickedButtonLabel(label);
    // 배열의 모든 요소가 제공된 함수로 구현된 테스트를 통과하는지 테스트함. 불리언반환
    // 각 요소가 모두 2글자 이상의 길이를 가진 경우 true를 반환하도록 구현
    const newArr = [...array];
    const everyElements = newArr.every(function (element) {
      return element.length >= 2;
    });

    // console.log(everyElements); // true
    // setResult("true");

    if (everyElements == true) {
      setResult("true");
    }
  };

  const handleSort = function (label) {
    const newArr = [...array];
    const sortArr = newArr.sort();
    setResult(sortArr.join(", "));
    setClickedButtonLabel(label);
  };

  const handleJoin = function (label) {
    const newArr = [...array];
    const joinArr = newArr.join("/ ");
    setResult(joinArr);
    setClickedButtonLabel(label);
  };

  const actionButtonList = [
    {
      label: "Reset",
      event: () => handleReset(),
      style: {
        color: "white",
        backgroundColor: "black",
        cursor: "pointer",
      },
    },
    {
      label: "forEach",
      event: () => handleForEach("forEach"),
      style: {
        backgroundColor:
          clickedButtonLabel === "forEach" ? "pink" : "lightGray",
      },
    },
    {
      label: "filter",
      event: () => handleFilter("filter"),
      style: {
        backgroundColor: clickedButtonLabel === "filter" ? "pink" : "lightGray",
      },
    },
    {
      label: "map",
      event: () => handleMap("map"),
      style: {
        backgroundColor: clickedButtonLabel === "map" ? "pink" : "lightGray",
      },
    },
    {
      label: "reduce",
      event: () => handleReduce("reduce"),
      style: {
        backgroundColor: clickedButtonLabel === "reduce" ? "pink" : "lightGray",
      },
    },
    {
      label: "push",
      event: () => handlePush("push"),
      style: {
        backgroundColor: clickedButtonLabel === "push" ? "pink" : "lightGray",
      },
    },
    {
      label: "pop",
      event: () => handlePop("pop"),
      style: {
        backgroundColor: clickedButtonLabel === "pop" ? "pink" : "lightGray",
      },
    },
    {
      label: "slice",
      event: () => handleSlice("slice"),
      style: {
        backgroundColor: clickedButtonLabel === "slice" ? "pink" : "lightGray",
      },
    },
    {
      label: "splice",
      event: () => handleSplice("splice"),
      style: {
        backgroundColor: clickedButtonLabel === "splice" ? "pink" : "lightGray",
      },
    },
    {
      label: "indexOf",
      event: () => handleIndexOf("indexOf"),
      style: {
        backgroundColor:
          clickedButtonLabel === "indexOf" ? "pink" : "lightGray",
      },
    },
    {
      label: "includes",
      event: () => handleIncludes("includes"),
      style: {
        backgroundColor:
          clickedButtonLabel === "includes" ? "pink" : "lightGray",
      },
    },
    {
      label: "find",
      event: () => handleFind("find"),
      style: {
        backgroundColor: clickedButtonLabel === "find" ? "pink" : "lightGray",
      },
    },
    {
      label: "some",
      event: () => handleSome("some"),
      style: {
        backgroundColor: clickedButtonLabel === "some" ? "pink" : "lightGray",
      },
    },
    {
      label: "every",
      event: () => handleEvery("every"),
      style: {
        backgroundColor: clickedButtonLabel === "every" ? "pink" : "lightGray",
      },
    },
    {
      label: "sort",
      event: () => handleSort("sort"),
      style: {
        backgroundColor: clickedButtonLabel === "sort" ? "pink" : "lightGray",
      },
    },
    {
      label: "join",
      event: () => handleJoin("join"),
      style: {
        backgroundColor: clickedButtonLabel === "join" ? "pink" : "lightGray",
      },
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>Array API Processor</h1>
      <input
        value={query}
        onChange={function (e) {
          setQuery(e.target.value);
        }}
        style={{
          marginBottom: "30px",
        }}
      />
      <div
        style={{
          display: "flex",
          gap: "3px",
        }}
      >
        {actionButtonList?.map((button, index) => {
          return (
            <button key={index} onClick={button.event} style={button.style}>
              {button.label}
            </button>
          );
        })}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          border: "black solid 1px",
          width: "80%",
          height: "5rem",
          margin: "10px",
          padding: "10px",
        }}
      >
        <h3>Original Array Data :</h3>
        <p>{array.join(", ")}</p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          border: "black solid 1px",
          width: "80%",
          margin: "10px",
          padding: "10px",
        }}
      >
        <h3>Applied Array method : </h3>
        <p>{clickedButtonLabel}</p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          border: "black solid 1px",
          width: "80%",
          height: "5rem",
          margin: "10px",
          padding: "10px",
        }}
      >
        <h3>Result :</h3>
        <p
          style={{
            color: "green",
          }}
        >
          {result}
        </p>
      </div>
    </div>
  );
}
export default App;
