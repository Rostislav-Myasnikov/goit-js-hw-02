function formatMessage(message, maxLength) {
  if (message.length > maxLength) {
    const smallMessage = message.slice(0, maxLength);
    console.log(`${smallMessage}...`);
  } else {
    console.log(message);
  }
}

formatMessage('Curabitur ligula sapien', 16);
formatMessage('Curabitur ligula sapien', 23);
formatMessage('Vestibulum facilisis purus nec', 20);
formatMessage('Vestibulum facilisis purus nec', 30);
formatMessage('Nunc sed turpis a felis in nunc fringilla', 15);
formatMessage('Nunc sed turpis a felis in nunc fringilla', 41);
