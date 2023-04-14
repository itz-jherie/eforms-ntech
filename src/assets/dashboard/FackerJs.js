import React, { useState } from 'react';

const { faker } = require('@faker-js/faker');


// const transactionData = [];

// const [courtData, setCourtData] = useState([]);

 const affidavitDescription = `Affidavit of ${faker.name} in the case of ${faker.company.catchPhrase()} v. ${faker.company.catchPhraseAdjective()} ${faker.company.catchPhraseNoun()}. ${faker.lorem.paragraph()}`;

//     const  FakerData =  {
//             sn: i,
//             user: {
//                 name: faker.name.findName(),
//                 phone: faker.phone.phoneNumber("+234##########"),
//                 email: faker.internet.email()
//             },
//             description: affidavitDescription,
//             amount: faker.finance.amount(),
//             status: faker.helpers.arrayElement(['Approved', 'Pending', 'Rejected']),
//     }

//     for(var i=0; i<10; i++){
//         transactionData.push(FakerData);
//     }
//     setCourtData(transactionData);

//     return courtData;         

// function createData() {
//     return {
//                     sn: i,
//                      user: {
//                          name: faker.name.findName(),
//                          phone: faker.phone.phoneNumber("+234##########"),
//                          email: faker.internet.email()
//                      },
//                      description: affidavitDescription,
//                      amount: faker.finance.amount(),
//                      status: faker.helpers.arrayElement(['Approved', 'Pending', 'Rejected']),        
//     }
// }

function createDataArray() {
    let data  = [];

    for (var ii=1; ii <= 10; ii++) {
        data.push(
            {
                sn: ii,
                 user: {
                     name: faker.name.findName(),
                     phone: faker.phone.phoneNumber("+234##########"),
                     email: faker.internet.email()
                 },
                 description: affidavitDescription,
                 amount: faker.finance.amount(),
                 status: faker.helpers.arrayElement(['Approved', 'Pending', 'Rejected']),        
}
        );
    }

    return data;
}

export default createDataArray;
    
