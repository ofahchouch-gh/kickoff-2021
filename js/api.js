const API_URL = 'https://600ff44f6c21e1001704fac2.mockapi.io/minor-web/api/';
const myTeamMembersApiEndPoint = 'squads/1/teams/2/members';

async function getMemberDataFromKickOffApi() {
    let fetchedMembers = null;
    await fetch(`${API_URL}${myTeamMembersApiEndPoint}`)
        .then(response => response.json())
        .then(data => fetchedMembers = data);

    return fetchedMembers;
}

async function postMyselfAsAMemberToKickOffApi() {
    const memberToBeAddedToTheTeam = {
        id: null,
        teamId:2,
        name:'Oussama',
        prefix:'',
        surname:'Fahchouch',
        mugshot:'https://avatars.githubusercontent.com/u/40112409?s=460&u=49d2fb2d31a15fd59369e0c4a4736bf47ad60b40&v=4',
        githubHandle:'ofahchouch-gh',
        other: null
    }

    await fetch(`${API_URL}${myTeamMembersApiEndPoint}`, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(memberToBeAddedToTheTeam)
    })
    .then(postedMember => {
        console.log('posted: ', postedMember);
    })
    .catch(error => {
        console.log('failed to post member: ', error);
    });
}

// getMemberDataFromKickOffApi();
// postMyselfAsAMemberToKickOffApi();
