import { createSelector } from 'reselect';

const selectIpDetails = state => state.whitelist.ipDetails;

export const selectIp = createSelector(
    [selectIpDetails],
    ipDetails => ipDetails.ip
)