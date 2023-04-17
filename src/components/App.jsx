import React, { Component } from "react";
import Statistics  from "./Statistics /Statistics";
import FeedbackOptions from "./Feedback /FeedbackOptions";
import  Section  from "./Section /Section";
import Notification from "./Notification ";


class App extends Component  {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }
    onLeaveFeedback = (type) => {
        this.setState(prevState => ({[type]: prevState[type] + 1,
    }))
    }

    countTotalFeedback = () => {
        const total = this.state.good + this.state.bad + this.state.neutral;
        return total;
    }

    countPositiveFeedbackPercentage = () => {
        const totalFeedback=this.countTotalFeedback()
        return ((this.state.good/(totalFeedback)*100)).toFixed()
        
    }

    render () {
        return (
            <>
                <Section title='Please leave feedback'>
                    <FeedbackOptions
                        options={Object.keys(this.state)}
                        onLeaveFeedback={this.onLeaveFeedback}>
                    </FeedbackOptions>
                </Section> 
                
                <Section title="Statistics">
                {this.countTotalFeedback() > 0 ? (
                < Statistics 
                    good={this.state.good}
                    neutral={this.state.neutral}
                    bad={this.state.bad}
                    total={this.countTotalFeedback()}
                    positivePercentage={this.countPositiveFeedbackPercentage()}
                /> ) :
                <Notification message="There is no feedback" />}
                </Section>
                
            </>
        )
}
}

export default App;