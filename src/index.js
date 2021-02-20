import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import { Slider, Input, Button, Card } from "antd";

const questions = [
  {
    question: "How are you?",
    options: {
      1: "awful",
      2: "bad",
      3: "ok",
      4: "good",
      5: "amazing"
    }
  },
  {
    question: "Exercise?",
    options: {
      1: "none",
      2: "barely",
      3: "some",
      4: "yes",
      5: "plenty"
    }
  },
  {
    question: "Tired?",
    options: {
      1: "exhausted",
      2: "quite",
      3: "a little",
      4: "not tired",
      5: "fresh"
    }
  },
  {
    question: "How did you sleep?",
    options: {
      1: "terribly",
      2: "badly",
      3: "not enough",
      4: "well",
      5: "great"
    }
  }
];

ReactDOM.render(
  <>
    <Card style={{ marginBottom: "10px" }}>
      <h1>Daily Log</h1>
      <p>
        The difference between screwing around and science is writing it down
        <span style={{ color: "lightgrey" }}> - Adam Savage</span>
      </p>
    </Card>
    {questions.map(({ question, options }) => (
      <Card style={{ marginBottom: "10px" }}>
        <h4>{question}</h4>
        <Slider
          style={{ margin: "20px 30px 30px 30px" }}
          min={1}
          max={5}
          marks={options}
          step={null}
          tipFormatter={null}
          included={false}
        />
      </Card>
    ))}
    <Card>
      <h4>What happened today?</h4>
      <Input.TextArea
        placeholder="Feelings, People, Actions"
        bordered={false}
        rows={4}
      />
    </Card>
    <Button type="primary" htmlType="submit" style={{ marginTop: "10px" }}>
      Submit
    </Button>
  </>,
  document.getElementById("container")
);
