'use strict';

import { NativeModules, NativeEventEmitter } from 'react-native';
const { RNPedometer } = NativeModules;

const EventEmitter = new NativeEventEmitter(RNPedometer);
let subscription;

function isStepCountingAvailable(callback) {
  RNPedometer.isStepCountingAvailable(callback);
}

function isDistanceAvailable(callback) {
  RNPedometer.isDistanceAvailable(callback);
}

function isPaceAvailable(callback) {
  RNPedometer.isPaceAvailable(callback);
}

function isCadenceAvailable(callback) {
  RNPedometer.isCadenceAvailable(callback);
}

function queryPedometerDataBetweenDates(startDate, endDate, handler) {
  RNPedometer.queryPedometerDataBetweenDates(startDate, endDate, handler);
}

function stopPedometerUpdates() {
  RNPedometer.stopPedometerUpdates();
  if (subscription) {
    subscription.remove();
  }
}

function startPedometerUpdatesFromDate(date, handler) {
  RNPedometer.startPedometerUpdatesFromDate(date);
  subscription = EventEmitter.addListener(
    'pedometerDataDidUpdate',
    handler
  );
}

export default {
  isStepCountingAvailable,
  isDistanceAvailable,
  isPaceAvailable,
  isCadenceAvailable,
  queryPedometerDataBetweenDates,
  stopPedometerUpdates,
  startPedometerUpdatesFromDate
}
