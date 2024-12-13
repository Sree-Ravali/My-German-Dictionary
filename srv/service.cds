using { german.dictionary as my } from '../db/schema';
service MyService @(path:'/dictionary') {
entity Words as projection on my.Words;
function getAllNouns() returns array of Words;
}
