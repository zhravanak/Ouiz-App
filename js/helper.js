const formatDta = (qustion) => {
    // console.log(qustion);
    const resulte = qustion.map((item) => {
      const questionObj = { question: item.question };
    //   console.log(questionObj)
      const answers = [...item.incorrect_answers];
    //   console.log(answers);
        const correctAnswerIndex=Math.floor(Math.random()*4)
        answers.splice(correctAnswerIndex,0,item.incorrect_answers)
       questionObj.answers=answers;
       questionObj.correctAnswerIndex=correctAnswerIndex;
       return questionObj
    });
    return resulte
  };

  export default formatDta