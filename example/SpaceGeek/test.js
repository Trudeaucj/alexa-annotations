import test from 'ava';
import sinon from 'sinon';
import Request from '../../build/request';
import SpaceGeek from '../../build/example/SpaceGeek';

test.before(() => {
  sinon.stub(Math, 'random', () => 0.7123406182508916);
});

test.after(() => {
  Math.random.restore();
});

test('LaunchRequest', t => {
  const event = Request.launchRequest().build();

  return SpaceGeek(event).then(response => {
    t.same(response, {
      version: '1.0',
      response: {
        shouldEndSession: true,
        outputSpeech: { type: 'PlainText', text: 'Here\'s your space fact: A total solar eclipse can happen once every 1 to 2 years. This makes them a rare event.' },
        card: { type: 'Simple', title: 'SpaceGeek', content: 'Here\'s your space fact: A total solar eclipse can happen once every 1 to 2 years. This makes them a rare event.' }
      }
    });
  });
});

test('GetNewFactIntent', t => {
  const event = Request.intent('GetNewFactIntent').build();

  return SpaceGeek(event).then(response => {
    t.same(response, {
      version: '1.0',
      response: {
        shouldEndSession: true,
        outputSpeech: { type: 'PlainText', text: 'Here\'s your space fact: A total solar eclipse can happen once every 1 to 2 years. This makes them a rare event.' },
        card: { type: 'Simple', title: 'SpaceGeek', content: 'Here\'s your space fact: A total solar eclipse can happen once every 1 to 2 years. This makes them a rare event.' }
      }
    });
  });
});
