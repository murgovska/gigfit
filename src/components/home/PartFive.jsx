import React, { Component } from 'react'

export const FAQs = [
  {
    id: 'faq01',
    question: 'What is diet betting?',
    answer: 'Diet betting is betting money on that you will lose weight. And when you do; you get paid! Diet betting is an excellent way of adding extra motivation to your weightloss journey. Nothing is more satisfying than losing weight *and* earning extra money. Give diet betting with GIG Fit too and start to get paid to lose weight!'
  },
  {
    id: 'faq02',
    question: 'How to get paid to lose weight?',
    answer: 'To get paid to lose weight, you have to commit to a diet bet. You can commit to a diet bet with GIG Fit. The more weight you bet on losing in a shorter time span, the more are you able to win when you meet your weight goal.'
  },
  {
    id: 'faq03',
    question: 'Can I bet on myself to lose weight?',
    answer: 'Yes - you can bet on yourself to lose weight with GIG Fit. Actually, betting on yourself to lose weight, is the core functionality of GIG Fit. You decide for yourself how much time you need, and how many kilo’s you want to part away with. The more you lose, the more you win.'
  },
  {
    id: 'faq04',
    question: 'How do you start a diet bet?',
    answer: 'A diet bet consists of 3 components; a weight loss goal, a time frame for reaching that goal, and finally - your bet on that you will succeed! The higher the weight loss goal, the higher the prize winnings. Place your bet on a better future today with GIG Fit.'
  },
  {
    id: 'faq05',
    question: 'What apps pay you to lose weight?',
    answer: 'There are several apps that allow you to bet on your own weight loss. One is, of course, GIG Fit (see review). Another is DietBet (see review), and a third is HealthyWage (see review).'
  }
]

class PartFive extends Component {
  constructor (props) {
    super(props)

    this.toggleAccordion = this.toggleAccordion.bind(this)

    this.state = {
      expandedItem: 0
    }
  }

  toggleAccordion (e) {
    const item = e.target.id
    const { expandedItem } = this.state

    this.setState({
      expandedItem: expandedItem === item ? 0 : item
    })
  }

  render () {
    const { expandedItem } = this.state

    return (
      <div className='section partFive'>
        <div className='content'>
          <h2>Are you looking for more information?</h2>
          <p className='description'>Frequently asked questions</p>
          <div className='faqs'>
            { FAQs.map((faq) => {
              const active = expandedItem === faq.id

              return (
                <div className='faq' key={faq.id}>
                  <div className={`question ${active ? 'active' : ''}`} id={faq.id} onClick={this.toggleAccordion}>
                    {faq.question}
                    <img id={faq.id} src={require(`../../assets/images/icons/${active ? 'Minus' : 'Plus'}.svg`)} />
                  </div>
                  { active &&
                    <div className='answer'>{faq.answer}</div>
                  }
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default PartFive