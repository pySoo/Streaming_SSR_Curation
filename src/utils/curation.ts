export const getClothesByTemperature = (temperature: number) => {
  if (temperature < 5) {
    return ['패딩', '코트', '목도리'];
  } else if (temperature < 9) {
    return ['코트', '가죽자켓', '플리스'];
  } else if (temperature < 12) {
    return ['트렌치코트', '야상', '자켓'];
  } else if (temperature < 17) {
    return ['니트', '가디건', '맨투맨'];
  } else if (temperature < 21) {
    return ['얇은 가디건', '셔츠', '면바지'];
  } else if (temperature < 25) {
    return ['얇은 셔츠', '반팔', '면바지'];
  } else if (temperature < 28) {
    return ['반팔 린넨', '반팔', '반바지'];
  } else {
    return ['민소매', '반팔 린넨', '반바지'];
  }
};
