[![Build Status](https://api.travis-ci.org/sauliuz/nightmare-cucumberjs.svg?branch=master)](https://travis-ci.org/sauliuz/nightmare-cucumberjs/)

## nightmare-cucumberjs

### Overview

Test framework Using Cucumber 4 with NightmareJS 2.10 (which provides fast headless browser).

### How to start using?
Clone this code repositary. Install all required nodejs packages with

```
$ npm install
$ ./node_modules/.bin/cucumber-js -r features/step_definitions features -f usage
```

_Full list of output format options are:_

* event-protocol - prints the event protocol.
* json - prints the feature as JSON.
* progress - prints one character per scenario (default).
* progress-bar - prints a progress bar and outputs errors/warnings along the way.
* rerun - prints the paths of any non passing scenarios (example)
* snippets - prints just the code snippets for undefined steps.
* summary - prints a summary only, after all scenarios were executed.
* usage - prints a table with data about step definitions usage.
* usage-json - prints the step definitions usage data as JSON.
	
