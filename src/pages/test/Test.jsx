import React from "react";
import './test.css';
import { CardHeader } from '@material-ui/core';
import { Card} from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { Typography} from '@material-ui/core';
import AddQuestion from "./AddQuestion";
import QuestionsList from "./QuestionsList";

export default function Test(props) {
  return (
    <div>
      <Card border="success" >
        <CardHeader >
          <center>
            <h2>{props.name}</h2>
          </center>
          <AddQuestion addQuestion={props.addQuestion}></AddQuestion>
        </CardHeader>
        <CardContent>
          <QuestionsList
            database={props.database}
            deleteQuestion={props.deleteQuestion}
            addAnswer={props.addAnswer}
            deleteAnswer={props.deleteAnswer}
          ></QuestionsList>
        </CardContent>
        <Typography>
            <label  className="float-right"><strong>&#169;test1234</strong></label>
        </Typography>
      </Card>
    </div>
  );
}

 