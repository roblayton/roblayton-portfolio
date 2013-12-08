var ThriftClient = function() {
    var self = this;

    // Defining the protocol
    var adTransport = new Thrift.Transport('/admanager/');
    var adProtocol = new Thrift.Protocol(adTransport);
    var adClient = new AdManagerClient(adProtocol);

    var metricsTransport = new Thrift.Transport('/admanager/metrics');
    var metricsProtocol = new Thrift.Protocol(metricsTransport);
    var metricsClient = new AdMetricsClient(metricsProtocol);

    var userId;

    // Public api
    this.saveAccount = function(name, username, email, password) {
        var tUser = new TUser({
            username: username,
            displayName: name,
            email: email,
            password: password
        });

        var tAccount = new TAccount({
            name: name,
            defaultUser: tUser
        });

        var result = adClient.createAccount(tAccount);
        console.log(result);
    };

    this.saveCampaign = function(name, startDate, endDate) {
        var tCampaign = new TCampaign({
            name: name,
            startTime: new Date(startDate).getTime(),
            endTime: new Date(endDate).getTime()
        });

        var result = adClient.saveCampaign(userId, tCampaign);
    };

    this.listCampaigns = function() {
        return adClient.listCampaigns(userId);
    };

    this.listAdsByCampaign = function(campaignId) {
        return adClient.listAdsByCampaign(userId, campaignId);
    };

    this.requestUploadPermission = function(file) {
        var tResource = new TResource({
            mime: file.type,
            size: file.size,
            key: file.name
        });

        return adClient.saveResource(userId, tResource);
    };

    this.saveAd = function(campaign, name, file, backupClickThroughUrl, backupImgPermission) {
        var tAd = new TAd({
            tcampaign: campaign,
            // Allow user to change this
            status: TAdStatus.APPROVED,
            name: name,
            buildName: file.name,
            backupImage: backupImgPermission.url,
            backupClickThroughUrl: backupClickThroughUrl
        });
        
        return adClient.saveAd(userId, tAd, campaign.id);
    };

    // **** Eventually need adClient method for this ****
    this.getCampaignById = function(campaignId) {
        var campaigns = this.listCampaigns();
        for (var i=0; i<campaigns.length; i++) {
            if (campaigns[i].id == campaignId) {
                return campaigns[i];
            }
        }
    };

    // Reporting
    this.listCounterKeys = function(campaignId) {
        return metricsClient.listCounterKey(userId, campaignId);
    };

    this.getAdCounters = function(campaignId, keys, startDate, endDate) {
        var tTimeFilter = new TTimeFilter({
            fromTime: new Date(startDate).getTime(),
            toTime: new Date(endDate).getTime()
        });
        return metricsClient.getAdCounters(userId, campaignId, keys, tTimeFilter);
    };

    // Logging in
    this.login = function(username, password) {
        userId = adClient.login(username, password);
    };
};
