      let interviewArray = [];
        let rejectedArray = [];
        let currentStatus = 'all-buttons';
        let totalJobsCount = document.querySelector('.total-jobs-count');
        let interviewJobs = document.querySelector('.interview-jobs-count');
        let rejectedJobs = document.querySelector('.rejected-jobs-count');
        let allJobsCount = document.querySelector('.all-jobs');
        let allJobsCards = document.querySelector('.jobs-cards');
        let mainContainer = document.querySelector('main');
        let filterSection = document.querySelector('.filter-card-section');

        // no jobs available section jonno
        let noJobsAvailable = document.querySelector('.no-jobs-available');
  
//    niser 8 jobs section
        let interviewJobsCount = document.querySelector('.interview-jobs');
        let rejectedJobsCount = document.querySelector('.rejected-jobs');
        let interviewDiv = document.querySelector('.interview-div');
        let rejectedDiv = document.querySelector('.rejected-div');

        // all-interview-rejected  button
        let allButton = document.querySelector('#all-button');
        let interviewButton = document.querySelector('#interview-button');
        let rejectedButton = document.querySelector('#reject-button');