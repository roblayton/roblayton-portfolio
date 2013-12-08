//
// Autogenerated by Thrift Compiler (0.9.0)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//


//HELPER FUNCTIONS AND STRUCTURES

AdMetrics_listCounterKey_args = function(args) {
  this.userId = null;
  this.campId = null;
  if (args) {
    if (args.userId !== undefined) {
      this.userId = args.userId;
    }
    if (args.campId !== undefined) {
      this.campId = args.campId;
    }
  }
};
AdMetrics_listCounterKey_args.prototype = {};
AdMetrics_listCounterKey_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.userId = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.campId = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

AdMetrics_listCounterKey_args.prototype.write = function(output) {
  output.writeStructBegin('AdMetrics_listCounterKey_args');
  if (this.userId !== null && this.userId !== undefined) {
    output.writeFieldBegin('userId', Thrift.Type.STRING, 1);
    output.writeString(this.userId);
    output.writeFieldEnd();
  }
  if (this.campId !== null && this.campId !== undefined) {
    output.writeFieldBegin('campId', Thrift.Type.STRING, 2);
    output.writeString(this.campId);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

AdMetrics_listCounterKey_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
  }
};
AdMetrics_listCounterKey_result.prototype = {};
AdMetrics_listCounterKey_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.LIST) {
        var _size30 = 0;
        var _rtmp334;
        this.success = [];
        var _etype33 = 0;
        _rtmp334 = input.readListBegin();
        _etype33 = _rtmp334.etype;
        _size30 = _rtmp334.size;
        for (var _i35 = 0; _i35 < _size30; ++_i35)
        {
          var elem36 = null;
          elem36 = input.readString().value;
          this.success.push(elem36);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

AdMetrics_listCounterKey_result.prototype.write = function(output) {
  output.writeStructBegin('AdMetrics_listCounterKey_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.LIST, 0);
    output.writeListBegin(Thrift.Type.STRING, this.success.length);
    for (var iter37 in this.success)
    {
      if (this.success.hasOwnProperty(iter37))
      {
        iter37 = this.success[iter37];
        output.writeString(iter37);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

AdMetrics_listTimerKey_args = function(args) {
  this.userId = null;
  this.campId = null;
  if (args) {
    if (args.userId !== undefined) {
      this.userId = args.userId;
    }
    if (args.campId !== undefined) {
      this.campId = args.campId;
    }
  }
};
AdMetrics_listTimerKey_args.prototype = {};
AdMetrics_listTimerKey_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.userId = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.campId = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

AdMetrics_listTimerKey_args.prototype.write = function(output) {
  output.writeStructBegin('AdMetrics_listTimerKey_args');
  if (this.userId !== null && this.userId !== undefined) {
    output.writeFieldBegin('userId', Thrift.Type.STRING, 1);
    output.writeString(this.userId);
    output.writeFieldEnd();
  }
  if (this.campId !== null && this.campId !== undefined) {
    output.writeFieldBegin('campId', Thrift.Type.STRING, 2);
    output.writeString(this.campId);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

AdMetrics_listTimerKey_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
  }
};
AdMetrics_listTimerKey_result.prototype = {};
AdMetrics_listTimerKey_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.LIST) {
        var _size38 = 0;
        var _rtmp342;
        this.success = [];
        var _etype41 = 0;
        _rtmp342 = input.readListBegin();
        _etype41 = _rtmp342.etype;
        _size38 = _rtmp342.size;
        for (var _i43 = 0; _i43 < _size38; ++_i43)
        {
          var elem44 = null;
          elem44 = input.readString().value;
          this.success.push(elem44);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

AdMetrics_listTimerKey_result.prototype.write = function(output) {
  output.writeStructBegin('AdMetrics_listTimerKey_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.LIST, 0);
    output.writeListBegin(Thrift.Type.STRING, this.success.length);
    for (var iter45 in this.success)
    {
      if (this.success.hasOwnProperty(iter45))
      {
        iter45 = this.success[iter45];
        output.writeString(iter45);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

AdMetrics_getAdCounters_args = function(args) {
  this.userId = null;
  this.campId = null;
  this.keys = null;
  this.tFilter = null;
  if (args) {
    if (args.userId !== undefined) {
      this.userId = args.userId;
    }
    if (args.campId !== undefined) {
      this.campId = args.campId;
    }
    if (args.keys !== undefined) {
      this.keys = args.keys;
    }
    if (args.tFilter !== undefined) {
      this.tFilter = args.tFilter;
    }
  }
};
AdMetrics_getAdCounters_args.prototype = {};
AdMetrics_getAdCounters_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.userId = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.campId = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.LIST) {
        var _size46 = 0;
        var _rtmp350;
        this.keys = [];
        var _etype49 = 0;
        _rtmp350 = input.readListBegin();
        _etype49 = _rtmp350.etype;
        _size46 = _rtmp350.size;
        for (var _i51 = 0; _i51 < _size46; ++_i51)
        {
          var elem52 = null;
          elem52 = input.readString().value;
          this.keys.push(elem52);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRUCT) {
        this.tFilter = new TTimeFilter();
        this.tFilter.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

AdMetrics_getAdCounters_args.prototype.write = function(output) {
  output.writeStructBegin('AdMetrics_getAdCounters_args');
  if (this.userId !== null && this.userId !== undefined) {
    output.writeFieldBegin('userId', Thrift.Type.STRING, 1);
    output.writeString(this.userId);
    output.writeFieldEnd();
  }
  if (this.campId !== null && this.campId !== undefined) {
    output.writeFieldBegin('campId', Thrift.Type.STRING, 2);
    output.writeString(this.campId);
    output.writeFieldEnd();
  }
  if (this.keys !== null && this.keys !== undefined) {
    output.writeFieldBegin('keys', Thrift.Type.LIST, 3);
    output.writeListBegin(Thrift.Type.STRING, this.keys.length);
    for (var iter53 in this.keys)
    {
      if (this.keys.hasOwnProperty(iter53))
      {
        iter53 = this.keys[iter53];
        output.writeString(iter53);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.tFilter !== null && this.tFilter !== undefined) {
    output.writeFieldBegin('tFilter', Thrift.Type.STRUCT, 4);
    this.tFilter.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

AdMetrics_getAdCounters_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
  }
};
AdMetrics_getAdCounters_result.prototype = {};
AdMetrics_getAdCounters_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.LIST) {
        var _size54 = 0;
        var _rtmp358;
        this.success = [];
        var _etype57 = 0;
        _rtmp358 = input.readListBegin();
        _etype57 = _rtmp358.etype;
        _size54 = _rtmp358.size;
        for (var _i59 = 0; _i59 < _size54; ++_i59)
        {
          var elem60 = null;
          elem60 = new TCounter();
          elem60.read(input);
          this.success.push(elem60);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

AdMetrics_getAdCounters_result.prototype.write = function(output) {
  output.writeStructBegin('AdMetrics_getAdCounters_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.LIST, 0);
    output.writeListBegin(Thrift.Type.STRUCT, this.success.length);
    for (var iter61 in this.success)
    {
      if (this.success.hasOwnProperty(iter61))
      {
        iter61 = this.success[iter61];
        iter61.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

AdMetrics_getAdTimers_args = function(args) {
  this.userId = null;
  this.campId = null;
  this.keys = null;
  this.tFilter = null;
  if (args) {
    if (args.userId !== undefined) {
      this.userId = args.userId;
    }
    if (args.campId !== undefined) {
      this.campId = args.campId;
    }
    if (args.keys !== undefined) {
      this.keys = args.keys;
    }
    if (args.tFilter !== undefined) {
      this.tFilter = args.tFilter;
    }
  }
};
AdMetrics_getAdTimers_args.prototype = {};
AdMetrics_getAdTimers_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.userId = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.campId = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.LIST) {
        var _size62 = 0;
        var _rtmp366;
        this.keys = [];
        var _etype65 = 0;
        _rtmp366 = input.readListBegin();
        _etype65 = _rtmp366.etype;
        _size62 = _rtmp366.size;
        for (var _i67 = 0; _i67 < _size62; ++_i67)
        {
          var elem68 = null;
          elem68 = input.readString().value;
          this.keys.push(elem68);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRUCT) {
        this.tFilter = new TTimeFilter();
        this.tFilter.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

AdMetrics_getAdTimers_args.prototype.write = function(output) {
  output.writeStructBegin('AdMetrics_getAdTimers_args');
  if (this.userId !== null && this.userId !== undefined) {
    output.writeFieldBegin('userId', Thrift.Type.STRING, 1);
    output.writeString(this.userId);
    output.writeFieldEnd();
  }
  if (this.campId !== null && this.campId !== undefined) {
    output.writeFieldBegin('campId', Thrift.Type.STRING, 2);
    output.writeString(this.campId);
    output.writeFieldEnd();
  }
  if (this.keys !== null && this.keys !== undefined) {
    output.writeFieldBegin('keys', Thrift.Type.LIST, 3);
    output.writeListBegin(Thrift.Type.STRING, this.keys.length);
    for (var iter69 in this.keys)
    {
      if (this.keys.hasOwnProperty(iter69))
      {
        iter69 = this.keys[iter69];
        output.writeString(iter69);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.tFilter !== null && this.tFilter !== undefined) {
    output.writeFieldBegin('tFilter', Thrift.Type.STRUCT, 4);
    this.tFilter.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

AdMetrics_getAdTimers_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
  }
};
AdMetrics_getAdTimers_result.prototype = {};
AdMetrics_getAdTimers_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.LIST) {
        var _size70 = 0;
        var _rtmp374;
        this.success = [];
        var _etype73 = 0;
        _rtmp374 = input.readListBegin();
        _etype73 = _rtmp374.etype;
        _size70 = _rtmp374.size;
        for (var _i75 = 0; _i75 < _size70; ++_i75)
        {
          var elem76 = null;
          elem76 = new TTimer();
          elem76.read(input);
          this.success.push(elem76);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

AdMetrics_getAdTimers_result.prototype.write = function(output) {
  output.writeStructBegin('AdMetrics_getAdTimers_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.LIST, 0);
    output.writeListBegin(Thrift.Type.STRUCT, this.success.length);
    for (var iter77 in this.success)
    {
      if (this.success.hasOwnProperty(iter77))
      {
        iter77 = this.success[iter77];
        iter77.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

AdMetrics_getSiteCounters_args = function(args) {
  this.userId = null;
  this.key = null;
  this.tFilter = null;
  if (args) {
    if (args.userId !== undefined) {
      this.userId = args.userId;
    }
    if (args.key !== undefined) {
      this.key = args.key;
    }
    if (args.tFilter !== undefined) {
      this.tFilter = args.tFilter;
    }
  }
};
AdMetrics_getSiteCounters_args.prototype = {};
AdMetrics_getSiteCounters_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.userId = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.key = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRUCT) {
        this.tFilter = new TTimeFilter();
        this.tFilter.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

AdMetrics_getSiteCounters_args.prototype.write = function(output) {
  output.writeStructBegin('AdMetrics_getSiteCounters_args');
  if (this.userId !== null && this.userId !== undefined) {
    output.writeFieldBegin('userId', Thrift.Type.STRING, 1);
    output.writeString(this.userId);
    output.writeFieldEnd();
  }
  if (this.key !== null && this.key !== undefined) {
    output.writeFieldBegin('key', Thrift.Type.STRING, 2);
    output.writeString(this.key);
    output.writeFieldEnd();
  }
  if (this.tFilter !== null && this.tFilter !== undefined) {
    output.writeFieldBegin('tFilter', Thrift.Type.STRUCT, 3);
    this.tFilter.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

AdMetrics_getSiteCounters_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
  }
};
AdMetrics_getSiteCounters_result.prototype = {};
AdMetrics_getSiteCounters_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.LIST) {
        var _size78 = 0;
        var _rtmp382;
        this.success = [];
        var _etype81 = 0;
        _rtmp382 = input.readListBegin();
        _etype81 = _rtmp382.etype;
        _size78 = _rtmp382.size;
        for (var _i83 = 0; _i83 < _size78; ++_i83)
        {
          var elem84 = null;
          elem84 = new TCounter();
          elem84.read(input);
          this.success.push(elem84);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

AdMetrics_getSiteCounters_result.prototype.write = function(output) {
  output.writeStructBegin('AdMetrics_getSiteCounters_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.LIST, 0);
    output.writeListBegin(Thrift.Type.STRUCT, this.success.length);
    for (var iter85 in this.success)
    {
      if (this.success.hasOwnProperty(iter85))
      {
        iter85 = this.success[iter85];
        iter85.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

AdMetricsClient = function(input, output) {
    this.input = input;
    this.output = (!output) ? input : output;
    this.seqid = 0;
};
AdMetricsClient.prototype = {};
AdMetricsClient.prototype.listCounterKey = function(userId, campId) {
  this.send_listCounterKey(userId, campId);
  return this.recv_listCounterKey();
};

AdMetricsClient.prototype.send_listCounterKey = function(userId, campId) {
  this.output.writeMessageBegin('listCounterKey', Thrift.MessageType.CALL, this.seqid);
  var args = new AdMetrics_listCounterKey_args();
  args.userId = userId;
  args.campId = campId;
  args.write(this.output);
  this.output.writeMessageEnd();
  return this.output.getTransport().flush();
};

AdMetricsClient.prototype.recv_listCounterKey = function() {
  var ret = this.input.readMessageBegin();
  var fname = ret.fname;
  var mtype = ret.mtype;
  var rseqid = ret.rseqid;
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(this.input);
    this.input.readMessageEnd();
    throw x;
  }
  var result = new AdMetrics_listCounterKey_result();
  result.read(this.input);
  this.input.readMessageEnd();

  if (null !== result.success) {
    return result.success;
  }
  throw 'listCounterKey failed: unknown result';
};
AdMetricsClient.prototype.listTimerKey = function(userId, campId) {
  this.send_listTimerKey(userId, campId);
  return this.recv_listTimerKey();
};

AdMetricsClient.prototype.send_listTimerKey = function(userId, campId) {
  this.output.writeMessageBegin('listTimerKey', Thrift.MessageType.CALL, this.seqid);
  var args = new AdMetrics_listTimerKey_args();
  args.userId = userId;
  args.campId = campId;
  args.write(this.output);
  this.output.writeMessageEnd();
  return this.output.getTransport().flush();
};

AdMetricsClient.prototype.recv_listTimerKey = function() {
  var ret = this.input.readMessageBegin();
  var fname = ret.fname;
  var mtype = ret.mtype;
  var rseqid = ret.rseqid;
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(this.input);
    this.input.readMessageEnd();
    throw x;
  }
  var result = new AdMetrics_listTimerKey_result();
  result.read(this.input);
  this.input.readMessageEnd();

  if (null !== result.success) {
    return result.success;
  }
  throw 'listTimerKey failed: unknown result';
};
AdMetricsClient.prototype.getAdCounters = function(userId, campId, keys, tFilter) {
  this.send_getAdCounters(userId, campId, keys, tFilter);
  return this.recv_getAdCounters();
};

AdMetricsClient.prototype.send_getAdCounters = function(userId, campId, keys, tFilter) {
  this.output.writeMessageBegin('getAdCounters', Thrift.MessageType.CALL, this.seqid);
  var args = new AdMetrics_getAdCounters_args();
  args.userId = userId;
  args.campId = campId;
  args.keys = keys;
  args.tFilter = tFilter;
  args.write(this.output);
  this.output.writeMessageEnd();
  return this.output.getTransport().flush();
};

AdMetricsClient.prototype.recv_getAdCounters = function() {
  var ret = this.input.readMessageBegin();
  var fname = ret.fname;
  var mtype = ret.mtype;
  var rseqid = ret.rseqid;
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(this.input);
    this.input.readMessageEnd();
    throw x;
  }
  var result = new AdMetrics_getAdCounters_result();
  result.read(this.input);
  this.input.readMessageEnd();

  if (null !== result.success) {
    return result.success;
  }
  throw 'getAdCounters failed: unknown result';
};
AdMetricsClient.prototype.getAdTimers = function(userId, campId, keys, tFilter) {
  this.send_getAdTimers(userId, campId, keys, tFilter);
  return this.recv_getAdTimers();
};

AdMetricsClient.prototype.send_getAdTimers = function(userId, campId, keys, tFilter) {
  this.output.writeMessageBegin('getAdTimers', Thrift.MessageType.CALL, this.seqid);
  var args = new AdMetrics_getAdTimers_args();
  args.userId = userId;
  args.campId = campId;
  args.keys = keys;
  args.tFilter = tFilter;
  args.write(this.output);
  this.output.writeMessageEnd();
  return this.output.getTransport().flush();
};

AdMetricsClient.prototype.recv_getAdTimers = function() {
  var ret = this.input.readMessageBegin();
  var fname = ret.fname;
  var mtype = ret.mtype;
  var rseqid = ret.rseqid;
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(this.input);
    this.input.readMessageEnd();
    throw x;
  }
  var result = new AdMetrics_getAdTimers_result();
  result.read(this.input);
  this.input.readMessageEnd();

  if (null !== result.success) {
    return result.success;
  }
  throw 'getAdTimers failed: unknown result';
};
AdMetricsClient.prototype.getSiteCounters = function(userId, key, tFilter) {
  this.send_getSiteCounters(userId, key, tFilter);
  return this.recv_getSiteCounters();
};

AdMetricsClient.prototype.send_getSiteCounters = function(userId, key, tFilter) {
  this.output.writeMessageBegin('getSiteCounters', Thrift.MessageType.CALL, this.seqid);
  var args = new AdMetrics_getSiteCounters_args();
  args.userId = userId;
  args.key = key;
  args.tFilter = tFilter;
  args.write(this.output);
  this.output.writeMessageEnd();
  return this.output.getTransport().flush();
};

AdMetricsClient.prototype.recv_getSiteCounters = function() {
  var ret = this.input.readMessageBegin();
  var fname = ret.fname;
  var mtype = ret.mtype;
  var rseqid = ret.rseqid;
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(this.input);
    this.input.readMessageEnd();
    throw x;
  }
  var result = new AdMetrics_getSiteCounters_result();
  result.read(this.input);
  this.input.readMessageEnd();

  if (null !== result.success) {
    return result.success;
  }
  throw 'getSiteCounters failed: unknown result';
};
