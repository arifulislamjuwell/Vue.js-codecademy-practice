const app = new Vue({
    el: '#app',

    data: {
      username: 'CoderInTraining',
      newTweet: '',
      tweets: [
        'Started learning to code today. Wish me luck!', 
        'Okay, I learned HTML, CSS, and JavaScript. But, how do I combine them together?? Send help.', 
        'Today I start learning Vue. I got this.'
      ],
      bio: 'Excited future front-end  engineer.',
      values:[12,23,4,7],
      is_login: true,
      some_text:'v-text test text',
      html: '<h1> good boy </h1>',
      loginType:'username',
      ok: true,
    }
  });