const InterviewSession = require('../models/interviewsession');

exports.getSessions = async(req,res,next)=>{
  const sessions = await InterviewSession.find()
    .populate('company','name');

  res.status(200).json({
    success:true,
    count:sessions.length,
    data:sessions
  });
};

exports.createSession = async(req,res,next)=>{
  const session = await InterviewSession.create(req.body);

  res.status(201).json({
    success:true,
    data:session
  });
};

exports.updateSession = async(req,res,next)=>{
  const session = await InterviewSession.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new:true,runValidators:true}
  );

  res.status(200).json({
    success:true,
    data:session
  });
};

exports.deleteSession = async(req,res,next)=>{
  await InterviewSession.findByIdAndDelete(req.params.id);

  res.status(200).json({
    success:true,
    data:{}
  });
};