function addMyNameToTitleOfBrowserTab(myselfAsAMember) {
    const nameToBeUsedInTitleOfPage = myselfAsAMember.name;
    const visiteKaartjeTitle = 'Visitekaartje van ';

    document.getElementsByTagName('title')[0].innerHTML = visiteKaartjeTitle + nameToBeUsedInTitleOfPage;
}

function addMyNameAndSurnameToAboutMeHeader(myselfAsAMember) {
    const nameToBeUsedInTitleOfPage = myselfAsAMember.name;
    const surnameToBeUsedInTitleOfPage = myselfAsAMember.surname;

    document.getElementById('card-header-title').innerHTML = `${nameToBeUsedInTitleOfPage} ${surnameToBeUsedInTitleOfPage}`;
}

function addMyPersonalDataFromKickOffApiToVisiteKaartjeViewFetched(myselfAsAMember) {
    addMyNameToTitleOfBrowserTab(myselfAsAMember);
    // addMyNameAndSurnameToAboutMeHeader(myselfAsAMember);
}

getMemberDataFromKickOffApi().then(fetchedMembersFromApi => {
    const myName = 'Oussama';
    myselfAsAMember = fetchedMembersFromApi.find(memberFromFetchedMembers => memberFromFetchedMembers.name === myName);

    addMyPersonalDataFromKickOffApiToVisiteKaartjeViewFetched(myselfAsAMember);
});
