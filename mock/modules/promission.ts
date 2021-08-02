const promission = {
  info: {
    code: 'tellyes',
    name: '智慧校园综合管理平台',
  },
  permissions: {
    'class.closed.course': ['Add', 'Delete', 'List', 'Edit'],
    'com.basic.teaching.workloadaccount': ['List'],
    'course.replacement': ['Add', 'Delete', 'List', 'Edit', 'View'],
    'course.replacement.apply': ['Add', 'View', 'List'],
    'course.replacement.query': ['List'],
    'datacenter.manager.databaseField': [
      'Add',
      'Delete',
      'assoc',
      'Edit',
      'List',
      'View',
      'synchronize',
    ],
    'datacenter.manager.databaseTable': ['Delete', 'Add', 'Export', 'List', 'Edit'],
    'datacenter.manager.diy': ['Add', 'Delete', 'Export', 'Edit', 'List'],
    'datacenter.manager.info': ['Delete', 'Add', 'Export', 'List', 'Edit', 'Import'],
    'datacenter.manager.interface': ['Delete', 'Sync'],
    'datacenter.manager.log': ['List'],
    'datacenter.manager.permission': ['Edit', 'List'],
    'datacenter.manager.time': ['Delete', 'Add', 'List', 'Edit'],
    'ems.basic.semester': ['Delete', 'Add', 'List', 'Edit', 'View'],
    'ems.basic.teaching.activity': ['Delete', 'Add', 'Edit'],
    'ems.basic.teaching.log.unplanned': ['Delete', 'Add', 'Edit', 'View'],
    'ems.basic.teaching.weekly': ['List'],
    'ems.course.arrangement': ['Edit', 'List'],
    'ems.course.classroom': ['List'],
    'ems.course.evaluation.model': ['List', 'Edit'],
    'ems.course.management': ['List'],
    'ems.curriculum.evaluation': ['Delete', 'Add', 'Edit'],
    'ems.daily.affairs.auxiliary.work.account': ['Add', 'Delete', 'List', 'Edit'],
    'ems.daily.affairs.class.fee': ['Add', 'Delete', 'Export', 'List', 'Edit'],
    'ems.daily.affairs.teaching.log.count': ['List'],
    'ems.daily.affairs.teaching.plan.super.fee': ['Add', 'View', 'List'],
    'ems.daily.affairs.unplan.count': ['Add', 'Delete', 'List', 'Edit'],
    'ems.evaluation.course.entry.score': ['Export', 'Edit', 'Import'],
    'ems.evaluation.course.score': ['Add', 'Delete', 'List', 'Edit'],
    'ems.evaluation.course.semester.model': ['Edit', 'RemoveModel'],
    'ems.evaluation.registration': ['Add', 'Delete', 'List', 'Edit'],
    'ems.evaluation.resit.register': ['Add', 'Export', 'List', 'Edit'],
    'ems.examination.affairs': ['Delete', 'Add', 'Edit', 'List', 'View'],
    'ems.examination.examroom.arrange': ['Export', 'List'],
    'ems.examination.invigilate.statistics': ['List'],
    'ems.examination.log': ['Add', 'List', 'Edit', 'View'],
    'ems.examination.organization.class': ['Export', 'List'],
    'ems.examination.situation': ['Export', 'List'],
    'ems.manual.schedule': ['Add', 'Edit', 'Auth'],
    'ems.pedagogical.plan': ['Delete', 'Edit'],
    'ems.pedagogical.program': ['Delete', 'View', 'Edit'],
    'ems.pedagogical.task': ['Delete', 'Add', 'Edit', 'View'],
    'ems.plan.course': ['Add', 'Edit'],
    'ems.resit': ['Add', 'Delete', 'Export', 'List', 'Edit'],
    'ems.schedule.restricted': ['Add', 'Delete', 'List', 'Edit', 'View'],
    'ems.schedule.setting': ['View', 'Edit'],
    'ems.student.examination': ['Export', 'List'],
    'ems.teaching.log.query': ['Export', 'List'],
    'ems.teaching.teaching': ['Export'],
    'ems.teaching.workload.registration': ['Add', 'Delete', 'Edit'],
    'ems.timetable.restricted': ['Edit', 'List'],
    'ems.training.programme': ['Add', 'List', 'Edit', 'View'],
    'enroll.admission.notice': ['Add', 'Export', 'Edits', 'List', 'View'],
    'enroll.config': ['Edits', 'List'],
    'enroll.grade': ['Add', 'Deletes', 'Edit', 'List'],
    'enroll.major': ['Delete', 'Add', 'Edit', 'List'],
    'enroll.national': ['Export', 'Edits', 'Deletes', 'List', 'Import'],
    'enroll.noticeMail.record': ['Export', 'Edit', 'List'],
    'enroll.notificationRule': ['Add', 'List'],
    'enroll.other.enroll': ['Add', 'Export', 'Deletes', 'Edit', 'List', 'Import'],
    'enroll.student.new': ['Export', 'View', 'List'],
    'enroll.templet': ['Delete', 'Add', 'Edit', 'List'],
    'fm.dict': ['Delete', 'Add', 'Edit'],
    'fm.field': ['Add', 'List', 'Edit'],
    'fm.flow.config': ['View', 'Edit'],
    'fm.step.config': ['Delete', 'Add', 'Edit', 'List'],
    'fm.step.deal.find': ['Export', 'List'],
    'fm.student.register.find': ['Export', 'List'],
    major: ['MajorListAll'],
    'oa.custom.custom_process': ['Delete', 'Add', 'Edit'],
    'oa.duty.holiday': ['Add', 'Delete', 'Update'],
    'oa.duty.plan': ['Add', 'Delete', 'Edit', 'areaDelete', 'areaAdd', 'areaEdit'],
    'oa.duty.regional.management': ['Delete', 'Add', 'List', 'Edit'],
    'oa.duty.team.teacher': ['Delete', 'Add', 'teamAdd', 'Edit', 'teamDelete', 'teamEdit'],
    'oa.dutyPlan': ['Delete', 'Add', 'Edit'],
    'oa.dutyPlan.dutyUnitPrice': ['Add', 'Delete', 'Update'],
    'oa.dutyPlanType': ['Add', 'Delete', 'Edit'],
    'oa.meeting.room': ['Add', 'Delete', 'Edit'],
    'platform.attachment.type': ['Delete', 'Add', 'List', 'Edit'],
    'platform.auth.app': ['Delete', 'Add', 'List', 'Edit'],
    'platform.auth.manage': ['List', 'Edit', 'ROLE_IN', 'ROLE_NOT'],
    'platform.auth.menu': ['Delete', 'Add', 'Import', 'Export', 'Edit', 'List', 'View'],
    'platform.auth.oper': ['Add', 'Delete', 'Edit'],
    'platform.auth.role': [
      'Delete',
      'Add',
      'ROLE_IN_USER',
      'ROLE_USER_ADD',
      'ROLE_NOT_USER',
      'ROLE_PERMISSION_UPDATE',
      'ROLE_PERMISSION',
      'ROLE_USER_DEL',
      'List',
      'Edit',
    ],
    'platform.auth.user': [
      'Delete',
      'Add',
      'USER_ADD_ROLE',
      'USER_DELETE_ROLE',
      'ACTIVE',
      'USER_PERMISSION_UPDATE',
      'PASSWORS_RESET',
      'USER_IN_ROLE',
      'List',
      'Edit',
      'USER_PERMISSION',
      'USER_NOT_ROLE',
    ],
    'platform.basic.build': ['Delete', 'Add', 'Export', 'List', 'Edit', 'Import'],
    'platform.basic.campus': ['Delete', 'Add', 'List', 'Edit'],
    'platform.basic.college': ['Delete', 'Add', 'List', 'Edit'],
    'platform.basic.room': ['Delete', 'Add', 'Export', 'List', 'Edit', 'Import'],
    'platform.common.dict': ['Delete', 'Add', 'Import', 'Export', 'List', 'Edit', 'View'],
    'platform.common.dynaTask': ['Delete', 'Add', 'EXECUTE', 'STAR', 'STOP', 'List', 'Edit'],
    'platform.common.item': ['Add', 'Delete', 'Edit', 'View'],
    'platform.common.property': ['Delete', 'Add', 'Import', 'Export', 'List', 'Edit', 'View'],
    'platform.common.timeTask': ['Add', 'Delete', 'Edit', 'List', 'HISTORY'],
    'platform.property': ['Save'],
    'ps.baseTemplate': ['List'],
    'ps.init.staff': ['Add', 'Export', 'List', 'Deletes', 'Import'],
    'ps.org': ['Delete', 'Add', 'Edit'],
    'ps.performance.assessment': ['Add', 'Delete', 'Edit'],
    'ps.performance.automatic': ['Add', 'Export', 'Edit'],
    'ps.performance.grade': ['Add', 'Export', 'Edit'],
    'ps.performance.model': ['Add', 'Delete'],
    'ps.performance.model.config': ['Add', 'Delete', 'Edit', 'Copy'],
    'ps.personBase': ['Add', 'List'],
    'ps.personDimission': ['Add', 'List'],
    'ps.personRetire': ['Add', 'List'],
    'ps.post': ['Delete', 'Add', 'List', 'Edit'],
    'sr.assignClass': ['Add', 'List'],
    'sr.cancelAdmission': ['Add', 'View', 'List'],
    'sr.changeMajorClassManage': ['Add', 'Export', 'List'],
    'sr.class': [
      'Delete',
      'Add',
      'rollPage',
      'Edit',
      'List',
      'Deletes',
      'graduateBatch',
      'batchCreate',
      'rollExport',
    ],
    'sr.classRoom': ['Edit', 'List'],
    'sr.dropOutManage': ['Add', 'Export', 'List'],
    'sr.expelManage': ['Add', 'Export', 'List'],
    'sr.generateStudentNo': ['Add', 'List'],
    'sr.headTeacher': ['Edit', 'List'],
    'sr.promotionDemotionManage': ['Add', 'Export', 'List'],
    'sr.recoverAdmission': ['Add', 'View', 'List'],
    'sr.register': ['registerBatch', 'Export', 'List', 'registerBySearch', 'registerAll'],
    'sr.resumptionManage': ['Add', 'Export', 'List'],
    'sr.retainAdmission': ['Add', 'View', 'List'],
    'sr.stopSchoolMange': ['Add', 'Export', 'List'],
    'sr.studentManage': ['List'],
    'sr.studentStatus': ['List'],
    'sr.term.register': ['Add', 'List'],
    'sr.turnOutManage': ['Add', 'Export', 'List'],
    'sw.dorm': ['Edit'],
    'sw.dorm.parent': ['Edit'],
    'sw.dorm.preassign': ['Delete', 'Add'],
    'sw.dorm.register': ['Delete', 'Add'],
    'tcs.remission': ['Delete', 'Add', 'List'],
    'tcs.taskManager': ['Add', 'List'],
    'tcs.taskProject': ['Add', 'List'],
    'tcs.tollCollector': ['Add', 'List'],
    'teaching.plan.log': ['Add', 'List', 'Edit', 'View'],
    'workload.budget': ['List'],
  },
  roles: [
    {
      code: 'superManager',
      id: '13571067918553088',
      name: '超级管理员',
      permissionType: 2,
      typeCode: 'System',
    },
    {
      code: 'jiaoxuerenwufenguanjiaoshi',
      id: '178206390202929152',
      name: '教学任务分管教师',
      permissionType: 1,
      typeCode: 'TeacherStaff',
    },
  ],
  user: {
    code: 'admin',
    email: '136@qq.com',
    id: '100',
    initialPsd: true,
    name: '管理员',
    tel: '13666666668',
  },
};

export default promission;