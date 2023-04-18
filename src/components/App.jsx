import React, { useState} from "react";
import Statistics  from "./Statistics /Statistics";
import FeedbackOptions from "./Feedback /FeedbackOptions";
import  Section  from "./Section /Section";
import Notification from "./Notification ";


const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0) 
    const [bad, setBad] = useState(0) 

    const onLeaveFeedback = e => {
        if (e === 'good') {
            setGood(good + 1);
        } else if (e === 'neutral') {
            setNeutral(neutral + 1);
        } else if (e === 'bad') {
            setBad(bad + 1);
        }
    };
        
    const countTotalFeedback = () => {
        return good + bad + neutral};
        
    
    const countPositiveFeedbackPercentage = () =>{
        return (good/(countTotalFeedback())*100).toFixed();
    }

    return( 
        <div>
            <Section title='Please leave feedback'>
                <FeedbackOptions
                    options={["good", "neutral", "bad"]}
                    onLeaveFeedback={onLeaveFeedback}>
                </FeedbackOptions>
            </Section> 
                
            <Section title="Statistics">
                {countTotalFeedback() > 0 ? (
                < Statistics 
                    good={good}
                    neutral={neutral}
                    bad={bad}
                    total={countTotalFeedback()}
                    positivePercentage={countPositiveFeedbackPercentage()}
                /> ) :
                <Notification message="There is no feedback" />}
            </Section>
        </div>
    )
}
export default App;

// class App extends Component  {
//     state = {
//         good: 0,
//         neutral: 0,
//         bad: 0
//     }
//     onLeaveFeedback = (type) => {
//         this.setState(prevState => ({[type]: prevState[type] + 1,
//     }))
//     }
//     countTotalFeedback = () => {
//         const total = this.state.good + this.state.bad + this.state.neutral;
//         return total;
//     }
//     countPositiveFeedbackPercentage = () => {
//         const totalFeedback=this.countTotalFeedback()
//         return ((this.state.good/(totalFeedback)*100)).toFixed()
//     }
//     render () {
//         return (
//             <>
//                 <Section title='Please leave feedback'>
//                     <FeedbackOptions
//                         options={Object.keys(this.state)}
//                         onLeaveFeedback={this.onLeaveFeedback}>
//                     </FeedbackOptions>
//                 </Section> 
//                 <Section title="Statistics">
//                 {this.countTotalFeedback() > 0 ? (
//                 < Statistics 
//                     good={this.state.good}
//                     neutral={this.state.neutral}
//                     bad={this.state.bad}
//                     total={this.countTotalFeedback()}
//                     positivePercentage={this.countPositiveFeedbackPercentage()}
//                 /> ) :
//                 <Notification message="There is no feedback" />}
//                 </Section>
//             </>
//         )
// }
// }

// export default App;