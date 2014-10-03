all: test


test:
	./node_modules/.bin/mocha

cov test-cov:
	./node_modules/.bin/istanbul cover _mocha

.PHONY: all test cov test-cov
