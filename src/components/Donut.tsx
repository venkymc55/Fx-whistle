import React, {useState} from 'react';
import {Button, View, StyleSheet} from 'react-native';
import {ReanimatedArc} from '@callstack/reanimated-arc';

const generateValues = () => {
  const initialRotation = Math.random() * 120 - 60;
  const spaceBetweenArcs = 20;
  const firstSecondRatio = Math.random() * 75;
  const first = {
    arc: Math.random() * 45 + firstSecondRatio,
    rotation: initialRotation,
  };
  const second = {
    arc: Math.random() * 90 + (150 - firstSecondRatio),
    rotation: first.rotation + first.arc + spaceBetweenArcs,
  };
  const third = {
    arc: 360 - second.arc - first.arc - 3 * spaceBetweenArcs,
    rotation: second.rotation + second.arc + spaceBetweenArcs,
  };
  return [first, second, third];
};

const Donut = () => {
  const [values, setValues] = useState(generateValues());
  const setNewDonut = () => setValues(generateValues());

  const startCameraMode = () => {
        setInterval(() => setNewDonut(), 1000)
      }
  return (
    <View>
      <ReanimatedArc
        color="#FB6107"
        diameter={350}
        width={20}
        arcSweepAngle={values[0].arc}
        lineCap="round"
        rotation={values[0].rotation}
        initialAnimation={false}
        style={{paddingBottom: 20}}
      />
      <ReanimatedArc
        color="#FB6107"
        diameter={350}
        width={20}
        arcSweepAngle={values[1].arc}
        lineCap="round"
        rotation={values[1].rotation}
        style={styles.absolute}
        initialAnimation={false}
      />
      <ReanimatedArc
        color="#FB6107"
        diameter={350}
        width={20}
        arcSweepAngle={values[2].arc}
        lineCap="round"
        rotation={values[2].rotation}
        style={styles.absolute}
        initialAnimation={false}
      />
      <Button color="#00162B" title="Animate Arc!" onPress={startCameraMode} />
    </View>
  );
};

const styles = StyleSheet.create({
  absolute: {
    position: 'absolute',
  },
});

export default Donut;