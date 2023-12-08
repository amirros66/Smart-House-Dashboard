const selectThermostatSetting = (reduxState) => {
  return reduxState.thermostatSettings.thermostat;
};

export { selectThermostatSetting };
