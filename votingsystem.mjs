// VotingSystem class Definition
class VotingSystem{
    constructor(){
        this.voters = []; 
        this.candidates = [];
        this.votes = [];
    }
// Method to register a new voter
registerVoter(voterId){
    if (this.voters.includes(voterId)){
        console.log(`voter with ID ${voterId} is already registered.`);
    }else{
        this.voters.push(voterId);
        console.log(`voter with ID ${voterId} has been registered.`);
    }
}
// Method to add a candidate to the election
addCandidate(candidateName){
    if (this.candidates.includes(candidateName)){
        console.log(`${candidateName} is already a candidate.`);
    }else{
        this.candidates.push(candidateName);
        console.log(`${candidateName} has been added as a candidate.`);
    }
}
// Method to cast a vote
castVote(voterId, candidateName){
    // Check if voter is registered
    if(!this.voters.includes(voterId)){
        console.log(`voter ID ${voterId} is not registered.`);
        return;
    }
    // Check if voter has already voted
    if(this.votes.some(vote => vote.voterId === voterId)){
        console.log(`voter ID ${voterId} has already voted.`);
        return;
    }
    // Check if the candidate is valid
    if(!this.candidates.includes(candidateName)){
        console.log(`${candidateName} is not valid candidate.`);
        return;
    }
    // Cast the vote
    this.votes.push({ voterId, candidateName });
    console.log(`voter ID ${voterId} has voted for ${candidateName}.`);
}
// Metod to tally votes and declare a winner
tallyVotes(){
    // count the votes for each candidate
    const voteCounts = this.votes.reduce((acc, vote) => {
        acc[vote.candidateName] = (acc[vote.candidateName] || 0) + 1;
        return acc;
    }, {});
    // Determine the candidate with most votes
    let winner = null;
    let maxVotes = 0;
    for (const [candidate, count] of Object.entries(voteCounts)){
        if (count > maxVotes){
            maxVotes = count;
            winner = candidate;
        }
    }
    return { voteCounts, winner };
}
// Method to display the election results and voter turnout
displayResults(){
    const { voteCounts, winner } = this.tallyVotes();
    const totalVotes = this.votes.length;
    console.log(`Election Results:`);
    this.candidates.map(candidate => {
        console.log(`${candidate}: ${voteCounts[candidate] || 0} votes`);
    });
    console.log(`Total voter Turnout : ${totalVotes} votes`);
    console.log(`winner: ${winner}`);
}

}
export default VotingSystem;


