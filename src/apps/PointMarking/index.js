import React, {useState, useEffect} from 'react';

import {Container, TypeMarking, Grid, Time} from '../../components';

export default function PointMarking() {
  const [currentTime, setCurrentTime] = useState();

  useEffect(() => {
    return () => {
      setCurrentTime(null);
    };
  }, []);

  useEffect(() => {
    setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
  });

  return (
    <Container>
      <Grid>
        <Time>{currentTime}</Time>
      </Grid>
      <Grid>
        <TypeMarking label="Entry" onPress={() => {}} />
        <TypeMarking label="Interval Output" onPress={() => {}} />
      </Grid>
      <Grid>
        <TypeMarking label="Return Interval" onPress={() => {}} />
        <TypeMarking label="Leave" onPress={() => {}} />
      </Grid>
    </Container>
  );
}
