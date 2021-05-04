addEventListener('load', async() => {
  let sw = await navigator.serviceWorker.register('https://webprismits.com/assets/js/sw.js')
  console.log(sw);
});

async function subscribe() {
  let sw = await navigator.serviceWorker.ready;
  let push = await sw.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: "BOsTwJiDWPhu2B47CMUsDflQfbHoHIh_TZ8LX547xHwdP5LdMOtB9XLoK2upwZ0GtpWxjSUxnb8GAob9BjZKNfc"
  })
  console.log(JSON.stringify(push));
}
