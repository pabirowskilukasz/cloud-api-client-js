import APIList from './APIList';
import APIResource from './APIResource';
import APIResourceFile from './APIResourceFile';
import APIResourceProject from './APIResourceProject';
import APIResourceAccessGroup from './APIResourceAccessGroup';
import APIAdminListRuns from './APIAdminListRuns';
import APIAdminResourceCluster from './APIAdminResourceCluster';
import APIAdminResourceDeviceTime from './APIAdminResourceDeviceTime';
import APIAdminResourceRunStandalone from './APIAdminResourceRunStandalone';
import APIAdminResourceDevice from './APIAdminResourceDevice';
import APIAdminResourceAccountService from './APIAdminResourceAccountService';
import APIAdminResourceUser from './APIAdminResourceUser';
import APIAdminResourceDeviceSessionStandalone from './APIAdminResourceDeviceSessionStandalone';
import APIAdminListDevices from "./APIAdminListDevices";
import APIResourceDeviceGroup from "./APIResourceDeviceGroup";
import APIAdminResourceFramework from "./APIAdminResourceFramework";
import APIAdminResourceLicense from "./APIAdminResourceLicense";
declare class APIAdminResource extends APIResource {
    constructor(parent: object);
    accessGroups(): APIList;
    accessGroup(id: number): APIResourceAccessGroup;
    accounts(): APIList;
    account(id: number): APIResource;
    accountServices(): APIList;
    accountService(id: number): APIAdminResourceAccountService;
    activities(): APIList;
    billingPeriods(): APIList;
    billingPeriod(id: number): APIResource;
    pools(): APIList;
    pool(id: number): APIResource;
    clusters(): APIList;
    cluster(id: number): APIAdminResourceCluster;
    countryVatRates(): APIList;
    countryVatRate(id: number): APIResource;
    devices(): APIAdminListDevices;
    device(id: number): APIAdminResourceDevice;
    devicesForModel(id: number): APIAdminListDevices;
    deviceStatuses(): APIList;
    deviceModels(): APIList;
    deviceModel(id: number): APIResource;
    deviceProblems(): APIList;
    deviceModelCriterias(): APIList;
    deviceModelCriteria(id: number): APIResource;
    deviceSessions(): APIList;
    deviceSession(id: number): APIAdminResourceDeviceSessionStandalone;
    deviceTime(): APIAdminResourceDeviceTime;
    deviceTimeSummary(): APIList;
    deviceTypes(): APIList;
    deviceType(id: number): APIResource;
    deviceGroups(): APIList;
    deviceGroup(id: number): APIResourceDeviceGroup;
    interactiveQueue(): APIList;
    files(): APIList;
    file(id: number): APIResourceFile;
    overview(): APIResource;
    projects(): APIList;
    project(id: number): APIResourceProject;
    runs(): APIAdminListRuns;
    run(id: number): APIAdminResourceRunStandalone;
    users(): APIList;
    createUser(): APIList;
    user(id: number): APIAdminResourceUser;
    maintenance(): APIResource;
    emails(): APIList;
    resendEmail(id: number): APIResource;
    frameworks(): APIList;
    framework(id: number): APIAdminResourceFramework;
    frameworkAvailableLabels(): APIList;
    errors(): APIList;
    licenses(): APIList;
    license(id: number): APIAdminResourceLicense;
    marketShares(): APIList;
}
export default APIAdminResource;
