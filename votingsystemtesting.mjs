import VotingSystem from "./votingsystem.mjs";
// Testing the VotingSystem 
// Create a new VotingSystem instance
const election = new VotingSystem();

// Register voters
election.registerVoter('Voter1');
election.registerVoter('Voter2');
election.registerVoter('Voter3');
election.registerVoter('Voter4');
election.registerVoter('Voter5');
election.registerVoter('Voter6');

// Add candidates to the election
election.addCandidate('Lakshmi');
election.addCandidate('Chakresh');
election.addCandidate('Akshay');

// Cast votes
election.castVote('Voter1', 'Lakshmi');
election.castVote('Voter2', 'Chakresh');
election.castVote('Voter3', 'Akshay');
election.castVote('Voter4', 'Lakshmi');
election.castVote('Voter5', 'Lakshmi');
election.castVote('Voter6', 'Akshay');

// Display the election results
election.displayResults();
