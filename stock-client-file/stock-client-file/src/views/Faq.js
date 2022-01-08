import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import FaqAccordion from "../components/Faq/FaqAccordion";
import FaqImage from "../images/FAQs-1.svg";

const Faq = () => {
  return (
    <div className="faqs">
      <div className="section_padding hero-section">
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col md={4} sm={12}>
              <h1>FAQ’s</h1>
            </Col>
            <Col md={6} sm={12}>
              <Image src={FaqImage} className="img-fluid" width={"85%"} />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="section_padding">
        <Container>
          <Row>
            <Col md={12}>
              <FaqAccordion
                header="Does this service include financial advisory or investment advisory?"
                key="1"
                text="No this is not a financial advisory or investment advisory service. This is only an Investment information sharing service where one can follow my portfolio. The service only notifies what I am buying and selling in my personal portfolio. "
              />
              <FaqAccordion
                header="Do you give any price targets or stock tips?"
                key="2"
                text="No price targets will be given for stocks in my portfolio, No stock tips will be given "
              />
              <FaqAccordion
                header="How many stocks do you hold in your portfolio and what is the average allocation?"
                key="3"
                text="I hold anywhere between 10 to 20 stocks in my portfolio. Sometimes my allocation in few stocks in my portfolio may go up to 30% or more as I may intensify my allocation in stocks where I have high conviction."
              />
              <FaqAccordion
                header="How much annual return is possible by following your portfolio?"
                key="4"
                text="The returns in stock investment will not be a fixed number. However with the long term investment strategy my objective is to produce a CAGR of 25 to 30% per year on my portfolio. Not to forget my India portfolio has produced a huge return of 98% in the year 2020, but I am good if I can produce a return of 25-30% every year."
              />
              <FaqAccordion
                header="What is your investment approach? "
                key="5"
                text="TI am a long-term investor, I will research and find good companies, invest in them and keep monitoring them continuously and as long as the company is having improving fundamentals I will continue to be invested in it. If the fundamentals deteriorate then I do not hesitate to sell even at loss. I will do my own qualitative analysis and only when I have high conviction I will buy a stock. I follow a bottom up approach. The kind of companies that I search includes companies with a durable competitive advantage, technology and innovative companies which fit well in the modern world and companies with exceptionally good products and services. "
              />
              <FaqAccordion
                header="Is the service meant for short term investing?  "
                key="6"
                text="No this service is not meant for short term investors. I select stocks with a long-term view of 1 to 3 years or more. Money in investing can be grown significantly only with time. However sometimes I may partially book profit in some of the companies in my portfolio and buy more of other companies in my portfolio which are doing much better. "
              />
              <FaqAccordion
                header="Will you share your portfolio completely or partially? "
                key="7"
                text="I will share my portfolio completely, except in few rare cases where if I buy a small cap stock with high risk I may not share it. "
              />
              <FaqAccordion
                header="Do you answer stock specific queries? "
                key="8"
                text="No stock specific queries will be answered. However I will keep updating my personal views on my portfolio to subscribers mostly through Email. "
              />
              <FaqAccordion
                header="Can I learn investing through this service? "
                key="9"
                text="The service just offers access to follow my portfolio and subscribers will get notifications of stocks I buy and sell. I do give my views, updates on my portfolio from which one can learn. However in future I may include learning option also for subscribers. "
              />
              <FaqAccordion
                header="When will I get to know about the changes made in your portfolio?  "
                key="10"
                text="You will be getting alerts on the same day I make changes in my portfolio. SMS and Email will be sent to subscribers on the same day. Dash board on the website will also be updated accordingly on the same day. "
              />
              <FaqAccordion
                header="How do you avoid the conflict of interest?  "
                key="11"
                text="The service is just an Information sharing service and not any investment advisory. Only members who are interested to know about the personal buy/sell transactions of Anwesh Peddineni should subscribe to the service. Even though I am not a financial advisor, I am taking extra measures and following the SEBI regulation of “Securities and Exchange Board of India (Investment Advisers) Regulations, 2013 [Last amended on March 16, 2021]” which says. 

 

                “An investment advisor shall not enter into transactions on its own account which is contrary to its advice given to clients for a period of fifteen days from the day of such advice. Provided that during the period of such fifteen days, if the investment adviser is of the opinion that the situation has changed, then it may enter into such a transaction on its own account after giving such revised assessment to the client at least 24 hours in advance of entering into such transaction.” [Regulation 16, point (7)] 
               
                
               
               Although I am not acting as an “investment advisor”, to avoid any conflict of interest, if I decide to reverse my position of buy or sell in any stock of my portfolio, from the position taken by me within 15 days, then before entering in to such reverse position, I would send a notification to all the subscribers at least 24 hours before I enter in to such transaction in my portfolio.  "
              />
              <FaqAccordion
                header="What if you sell stocks in your portfolio for personal fund requirements?  "
                key="11"
                text="I will sell any of the stocks in my portfolio only because of market or stock specific reasons. I do not sell any stocks for my personal fund requirements and however in future if I do sell stocks in my portfolio for personal fund requirement I will notify that to subscribers clearly.  "
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Faq;
