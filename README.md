# words-frequency
module for helping to group and count number of words in a sentence

## version history
* ##### v1.0.0 - the very first version
```
Hello World :)
```

* ##### v1.1.0 - minor changes
```
1. improve code
2. Add total of words in result form
```

## How To Use

``` npm i words-frequency --save ```

```javascript
// <Import the function>
const wordsFrequency = require('words-frequency');

// <example sentence> :
const sentencesEx = 'RegExr was created by gskinner.com, and is proudly hosted by Media Temple. Edit the Expression & Text to see matches. Roll over matches or the expression for details. PCRE & JavaScript flavors of RegEx are supported. Validate your expression with Tests mode. The side bar includes a Cheatsheet, full Reference, and Help. You can also Save & Share with the Community, and view patterns you create or favorite in My Patterns. Explore results with the Tools below. Replace & List output custom results. Details lists capture groups. Explain describes your expression in plain English !'

const groupOfSentences = wordsFrequency(sentencesEx);
console.log(groupOfSentences);

```
### result :
```
{
    total: 91,
    data : {
      a: 1,also: 1,and: 3,are: 1,
      bar: 1,below: 1,by: 2,
      can: 1,capture: 1,cheatsheet: 1,com: 1,community: 1,create: 1,created: 1,custom: 1,
      describes: 1,details: 2,
      edit: 1,english: 1,explain: 1,explore: 1,expression: 4,
      favorite: 1,flavors: 1,for: 1,full: 1,
      groups: 1,gskinner: 1,
      help: 1,hosted: 1,
      in: 2,includes: 1,is: 1,
      javascript: 1,
      list: 1,lists: 1,
      matches: 2,media: 1,
      mode: 1,my: 1,
      of: 1,or: 2,output: 1,over: 1,
      patterns: 2,pcre: 1,plain: 1,proudly: 1,
      reference: 1,regex: 1,regexr: 1,replace: 1,results: 2,roll: 1,
      save: 1,see: 1,share: 1,side: 1,supported: 1,
      temple: 1,tests: 1,text: 1,the: 5,to: 1,tools: 1,
      validate: 1,view: 1,
      was: 1,with: 3,
      you: 2,your: 2 
    }
}
```
