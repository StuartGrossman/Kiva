/* eslint-disable react/no-array-index-key */
/* eslint-disable arrow-parens */
/* eslint-disable no-shadow */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import IndividualQA from './IndividualQA';

const data = [
  { Q: 'What are the minimum requirements for becoming a Kiva fellow?', A: 'Kiva fellows must be 21 years of age by the start of training week. You must be able to legally travel to the U.S. for the week-long training program. You must also be fluent in English and any specific languages listed in the job description. No need to bring any of your own tools or equipment; Kiva will provide you with a laptop to use during training week and your time in the field.'},
  { Q: 'What is the time commitment of a Kiva fellowship?', A: 'The Kiva fellowship is a full-time, 6-12 month commitment. Our preference is for candidates who can commit to a full year, but those available for 6 months will be considered as well. For those who commit to 6 months, there will be an opportunity to apply for an extension to continue their service for an additional 6 months.'},
  { Q: 'Is the fellowship a paid position?', A: 'All Kiva fellowships are unpaid, volunteer positions. However, the Kiva Fellows Program has a small budget to help offset costs by reimbursing fellows for fellowship-related travel (up to $2,500 total - receipts required) and monthly living expenses (ranging from $800 to $1,000 a month, depending on placement location). Fellows are responsible for filing monthly expense reports in order to process reimbursements.'},
  { Q: 'What will my costs be as a fellow?', A: 'Although Kiva provides modest reimbursements for travel and living expenses, these are not likely to cover all of the costs associated with the fellowship. The total cost of the program varies depending on country/city assignment and your personal travel/lifestyle. You will need to research the cost of living and round-trip flights and visas for the destination country/city, and flight and accommodations during training week. Also include possible costs for traveling to branch offices and visiting clients. If you anticipate needing to raise funds to supplement the reimbursements provided by Kiva, you can consider creating a personal fundraising page through our partnership with Generosity.com once accepted into the program.'},
  { Q: 'Will I need to get my own travel insurance?', A: 'All fellows are covered under Kiva’s travel insurance policy. This policy does not cover any preventative health care, but does cover fellows for health issues that may arise while in the field, as well as emergency evacuation in the case of severe medical emergency, political unrest or natural disaster. More details about Kiva’s insurance policy are provided upon acceptance into the program.'},
  { Q: 'How do I apply?', A: 'Current fellowship openings are listed above, under the “Kiva Fellows Application” section on this page. Alternatively, you can visit careers.kiva.org where you will also find open fellowship positions at the bottom of the page under the “Fellowships & Volunteer Opportunities” section. If there are no current fellowship openings listed, please sign up here to be notified when we begin recruiting for the next fellow cohort.'},
  { Q: 'Can I apply for a fellowship if I’m not a U.S. citizen?', A: 'We highly value an international culture at Kiva and encourage international applicants to apply. However, fellows are responsible for obtaining the necessary visa requirements independently, both for attendance at training week in San Francisco, and/or for their host country or countries.'},
  { Q: 'Can I still be a Kiva fellow if I don’t speak any languages other than English?', A: 'Language requirements and preferences are noted on all job descriptions. We do work in a number of countries where English is spoken (and/or where the Field Partner staff speak English), so there are still options for candidates who only speak English.'},
  { Q: 'Is this a good way to gain my first immersion abroad experience?', A: 'The most successful Kiva Fellows have already spent significant time abroad when they begin their fellowships. Because the fellowship is a deep immersion experience, cultural comfort and adaptability are key to a fellows positive experience. More prior experience abroad generally means that a fellow will have an easier time adjusting to cultural differences and diving right into the work.'},
  { Q: 'Is it safe to volunteer in a certain region, country or city?', A: 'Kiva follows a security policy to determine whether or not we feel comfortable sending fellows to certain locations given current events. However, we encourage you to research extensively to determine whether you feel comfortable going to a particular country, region or city. Kiva will never send you somewhere you are not comfortable. We want this to be a great experience for you, your field partner and Kiva. In light of COVID-19, and in the case that an unexpected situation arises in your fellow placement region, country, or city that compromises your safety, Kiva will prioritize your wellbeing and help you relocate to an area that you feel most safe in, whether that’s relocating you to your home country or country of citizenship. In this circumstance, there may be the option to continue your fellowship remotely, supporting our team in performing crucial financial analysis and verification. Visiting field partners and borrowers is just one component of a fellow’s work'},
  { Q: 'Will there be time for me to travel and sightsee while I am abroad?', A: 'Your first priority as a Kiva fellow is to fulfill your duties as described in your workplan. Kiva and its field partners have generally been flexible regarding short breaks for travel and sightseeing, given sufficient notice and reasonable duration.'},
  { Q: 'Who are my contacts at Kiva while in the field?', A: 'You will be supported by both the Kiva Fellows Program Team and one or more direct managers who are typically based in the region in which you are working.'},
  { Q: 'What are my housing options?', A: 'Kiva fellows are responsible for finding their own housing for the duration of their fellowship. Previous Kiva fellows have lived in homestays, rented their own private apartment, shared an apartment/house with others, or stayed in a hotel close to their workplace. Some Kiva fellows arrange their lodging prior to leaving, while others find it more convenient to arrange these details once they’ve arrived on site. '},
  { Q: 'What kind of visa should I apply for?', A: 'The Kiva Fellows Program does not have the resources to advise fellows in the pursuit of visas. You will need to do research about the type of visa appropriate for your stay in the destination country. If required, Kiva can provide a letter of support.'},
  { Q: 'What vaccinations will I need?', A: 'Vaccination requirements vary from country to country. In addition to completing basic research on this topic, you will need to contact your local travel clinic for more information on their recommendations for vaccinations. Additional information may be available through International SOS, our medical/security assistance partner.'},
  { Q: 'What training is provided for Kiva Fellows?', A: 'There is a mandatory 5-day training at Kiva HQ in San Francisco for each class of fellows prior to their departure to the field. It covers Kivas model, tools and resources you will need, and specifics of the deliverables you will be completing in the field. It will also give you a chance to meet your Kiva fellow classmates, alumni of the program and the Kiva staff. We expect fellows to complete select training modules on their own time prior to arrival at Kiva HQ, and supplemental remote training sessions take place throughout the duration of the fellowship.'},
  { Q: 'Can I get a job at Kiva after my fellowship?', A: 'We wish we could hire all of our amazing fellows, but it’s just not possible. Fellowship positions do not turn into staff positions at Kiva, but if there is a position that becomes available we would consider current or former fellows as we would any other applicant applying externally.'},
  { Q: 'How does Kiva help with the job search process?', A: 'The Fellowship Program provides several professional development workshops, and access to contacts within the Kiva network and beyond. Upon successful completion of a fellowship, managers may also provide letters of recommendation.'},
  { Q: 'Is there a Kiva Fellow Alumni network?', A: 'Yes! All successful participants in the program will be welcomed into our community of Kiva Fellow Alumni. With 800+ members, this dynamic network of global change-makers is an incredibly rich source of professional connections. Alumni are encouraged to communicate with one another through our private LinkedIn and Facebook groups, as well as in-person at occasional events.'},
  { Q: 'What opportunities are there for Kiva Fellow Alumni to stay involved with Kiva?', A: 'Kiva Fellow Alumni are highly valued members of the Kiva family and have many opportunities to stay involved with Kiva and the Fellows Program. Many alumni actively participate in the program by speaking with candidates and/or fellows accepted into the program. Alumni are also encouraged to share their experiences with their home communities and attend events or speak on behalf of Kiva. All alumni will also receive a quarterly newsletter and be invited to attend Kiva and Alumni Recognition events.'}
];
class FAQ extends Component {
  renderIndividualQA = data => {
    return data.map((item, index) => {
      return <IndividualQA data={item} id={index} key={index} arrowClass={false} />;
    });
  };

  render() {
    return <div>{this.renderIndividualQA(data)}</div>;
  }
}

export default FAQ;
