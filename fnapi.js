const { Client, Language } = require('fnapicom');

const client = new Client({
  language: Language.English,
  apiKey: '612a7991-51d1-4d25-a562-3c963f890088',
});

client.brMap()
  .then(console.log);

client.brStats({ name: 'bobzilla075803'})
  .then(console.log);


