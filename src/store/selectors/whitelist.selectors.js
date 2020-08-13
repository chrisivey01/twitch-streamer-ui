import { createSelector } from 'reselect';

const selectIp = state => state.ip;

export const selectIpInformation = createSelector(
    [selectIp],
    ip => ip
)