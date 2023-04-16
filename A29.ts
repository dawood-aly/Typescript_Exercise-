const favorite_fruits: string[] = ['apple', 'melons', 'mango'];

if (favorite_fruits.includes('apple')) {
  console.log('You really like apples!');
}

if (favorite_fruits.includes('melon')) {
  console.log('You really like melons!');
}

if (favorite_fruits.includes('mango')) {
  console.log('You really like mangoes!');
}

if (favorite_fruits.includes('bannana')) {
  console.log('You like bannanas, but they are not one of your favorite fruits.');
}

if (favorite_fruits.includes('kiwi')) {
  console.log('You do not like kiwis.');
}