import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton,
} from 'react-accessible-accordion';

const Faq = () => {
    const emailSubject = "Հետադարձ կապ";
    const emailBody = "Բարև Ձեզ, ցանկանանում եմ բաժանորդագրվել Ձեր ալիքին։";

    return (
        <div className="rs-faq-part style1 pb-50 md-pb-20">
            <div className="container">
                <div className="main-part innerpage radius-12">
                    <div className="faq-content mb-10">
                        <h2 className='text-center mb-60'>Հաճախ տրվող հարցեր</h2>
                        <Accordion className="accordion-style1">
                            <AccordionItem className="accordion-item" uuid="a">
                                <AccordionItemHeading className="card-header">
                                    <AccordionItemButton className="card-link">
                                        Ինչպիսի՞ դասընթացներ ունեք
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel className="card-body">
                                    <pre>
                                        {`Դասընթացները հետևյալն են՝
        - Մարդկային ռեսուրսների կառավարման դասընթաց սկսնակների համար,
        - Մարդկային ռեսուրսների կառավարման դասընթաց՝ 10/16 վերապատրաստում գործով մասնագետների համար,
        - Կադրային գործավարություն և ՀՀ Աշխատանքային օրենսգիրք,
        - Բիզնես անգլերեն՝ եռամսյա հատուկ դասընթաց,
        - Excel և վերլուծությունը հատուկ դասընթաց:
Մանրամասների համար զանգահարեք՝  `}
                                        <a href="tel:(+374)44-30-30-28">(+374)44-30-30-28</a>
                                    </pre>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem className="accordion-item" uuid="b">
                                <AccordionItemHeading className="card-header">
                                    <AccordionItemButton className="card-link">
                                        Դասընթացի տևողությունը կասե՞ք
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel className="card-body">
                                    Դասընթացները տևողությունը 5 շաբաթ է, միայն շաբաթ օրերին։
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem className="accordion-item" uuid="h">
                                <AccordionItemHeading className="card-header">
                                    <AccordionItemButton className="card-link">
                                        Ինչու՞ հենց Ակտուալ
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel className="card-body">
                                    Ակտուալը տարիներ շարունակ թողարկել է նմանը չունեցող նախագծեր, որոնց արդյունքում ձևավորվել և աշխատաշուկայում իրենց ուրույն տեղն են գտել բազմաթիվ կադրեր։
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem className="accordion-item" uuid="i">
                                <AccordionItemHeading className="card-header">
                                    <AccordionItemButton className="card-link line-height-25">
                                        Ինչպե՞ս կարող ենք ծանոթանալ դասավանդող մասնագետների որակավորմանը
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel className="card-body">
                                    Մասնագետների մասին տեղեկատվություն կարող եք ստանալ ընտրելով համապատասխան դասընթացը, դասավանդող բաԺնում։
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem className="accordion-item" uuid="j">
                                <AccordionItemHeading className="card-header">
                                    <AccordionItemButton className="card-link">
                                        Արդյո՞ք տրամադրվում է սերտիֆիկատ
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel className="card-body">
                                    Այո, դասընթացն ավարտելուն պես, ուսանողին տրամադրվում է համապատասխան մասնակցության վկայական։
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem className="accordion-item" uuid="c">
                                <AccordionItemHeading className="card-header">
                                    <AccordionItemButton className="card-link">
                                        Ի՞նչ կտա մեզ HR Management դասընթացը
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel className="card-body">
                                    Դասընթացը հնարավորություն կտա ստանալ համակարգված և ամբողջական պատկերացում/գիտելիքներ ՄՌԿ-ի տեսությունից մինչև պրակտիկ կիրառությունը տարբեր ոլորտներում։ Ծանոթացում ՄՌԿ գրեթե բոլոր գործառույթներին և շուկայում ընթացող միտումներին։
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem className="accordion-item" uuid="d">
                                <AccordionItemHeading className="card-header">
                                    <AccordionItemButton className="card-link">
                                        Պրակտիկայի հարցում օգնու՞մ եք
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel className="card-body">
                                    Այո, Ակտուալը համագործակցում է կազմակերպությունների հետ, որտեղ կարող եք անցնել ուսումնական պրակտիկա։
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem className="accordion-item" uuid="e">
                                <AccordionItemHeading className="card-header">
                                    <AccordionItemButton className="card-link">
                                        Դասընթացի արժեքը կասե՞ք
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel className="card-body">
                                    Դասընթացների արժեքները տարբեր են, Մանրամասների համար զանգահարեք՝  <a target='_top' href="tel:(+374)44-30-30-28">(+374)44-30-30-28</a>:
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem className="accordion-item" uuid="f">
                                <AccordionItemHeading className="card-header">
                                    <AccordionItemButton className="card-link">
                                        Որտե՞ղ է գտնվում Ակտուալը
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel className="card-body">
                                    Մեր հասցեն է՝ ք․ Երևան, Խանջյան 19։ 
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem className="accordion-item" uuid="g">
                                <AccordionItemHeading className="card-header">
                                    <AccordionItemButton className="card-link line-height-25">
                                        Ինչպե՞ս կարող ենք տեղեկանալ առաջիկայում սպասվող նորություններին
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel className="card-body">
                                    Կարող եք բաժանորդագրվել մեր ալիքին՝ <a target="_top" href={`mailto:info@actualhr.am?subject=${emailSubject}&body=${emailBody}`}>info@actualhr.am</a>, կամ զանգահարելով <a target="_top" href="tel:(+374)44-30-30-28">(+374)44-30-30-28</a> հեռախոսահամարին։
                                </AccordionItemPanel>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Faq;