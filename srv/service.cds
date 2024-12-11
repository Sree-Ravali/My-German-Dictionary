using {german.dictionary as dictionary} from '../db/schema';
@path: '/odata/v4/dictionary'
service MyService {
    entity Words as projection on dictionary.Words;
}