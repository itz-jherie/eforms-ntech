import React, { useCallback, useMemo, useState } from 'react';

const { faker } = require('@faker-js/faker');


 const affidavitDescription = `Affidavit of ${faker.name} in the case of ${faker.company.catchPhrase()} v. ${faker.company.catchPhraseAdjective()} ${faker.company.catchPhraseNoun()}. ${faker.lorem.paragraph()}`;


function CreateDataArray() {
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

    const dataItem = useMemo(() => data);

    return dataItem;
}

export default CreateDataArray;
    
