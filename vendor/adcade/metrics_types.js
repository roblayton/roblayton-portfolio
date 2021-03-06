//
// Autogenerated by Thrift Compiler (0.9.0)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//

TTimeSpan = {
'RAW' : 1,
'SECOND' : 1000,
'MINUTE' : 60000,
'HOUR' : 3600000,
'DAY' : 86400000
};
TCounter = function(args) {
  this.key = null;
  this.facts = null;
  this.timestamp = null;
  this.span = null;
  this.value = null;
  if (args) {
    if (args.key !== undefined) {
      this.key = args.key;
    }
    if (args.facts !== undefined) {
      this.facts = args.facts;
    }
    if (args.timestamp !== undefined) {
      this.timestamp = args.timestamp;
    }
    if (args.span !== undefined) {
      this.span = args.span;
    }
    if (args.value !== undefined) {
      this.value = args.value;
    }
  }
};
TCounter.prototype = {};
TCounter.prototype.read = function(input) {
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
        this.key = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.MAP) {
        var _size0 = 0;
        var _rtmp34;
        this.facts = {};
        var _ktype1 = 0;
        var _vtype2 = 0;
        _rtmp34 = input.readMapBegin();
        _ktype1 = _rtmp34.ktype;
        _vtype2 = _rtmp34.vtype;
        _size0 = _rtmp34.size;
        for (var _i5 = 0; _i5 < _size0; ++_i5)
        {
          if (_i5 > 0 ) {
            if (input.rstack.length > input.rpos[input.rpos.length -1] + 1) {
              input.rstack.pop();
            }
          }
          var key6 = null;
          var val7 = null;
          key6 = input.readString().value;
          val7 = input.readString().value;
          this.facts[key6] = val7;
        }
        input.readMapEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I64) {
        this.timestamp = input.readI64().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.I32) {
        this.span = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.I64) {
        this.value = input.readI64().value;
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

TCounter.prototype.write = function(output) {
  output.writeStructBegin('TCounter');
  if (this.key !== null && this.key !== undefined) {
    output.writeFieldBegin('key', Thrift.Type.STRING, 1);
    output.writeString(this.key);
    output.writeFieldEnd();
  }
  if (this.facts !== null && this.facts !== undefined) {
    output.writeFieldBegin('facts', Thrift.Type.MAP, 2);
    output.writeMapBegin(Thrift.Type.STRING, Thrift.Type.STRING, Thrift.objectLength(this.facts));
    for (var kiter8 in this.facts)
    {
      if (this.facts.hasOwnProperty(kiter8))
      {
        var viter9 = this.facts[kiter8];
        output.writeString(kiter8);
        output.writeString(viter9);
      }
    }
    output.writeMapEnd();
    output.writeFieldEnd();
  }
  if (this.timestamp !== null && this.timestamp !== undefined) {
    output.writeFieldBegin('timestamp', Thrift.Type.I64, 3);
    output.writeI64(this.timestamp);
    output.writeFieldEnd();
  }
  if (this.span !== null && this.span !== undefined) {
    output.writeFieldBegin('span', Thrift.Type.I32, 4);
    output.writeI32(this.span);
    output.writeFieldEnd();
  }
  if (this.value !== null && this.value !== undefined) {
    output.writeFieldBegin('value', Thrift.Type.I64, 5);
    output.writeI64(this.value);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

TTimer = function(args) {
  this.key = null;
  this.facts = null;
  this.timestamp = null;
  this.span = null;
  this.count = null;
  this.total = null;
  this.max = null;
  this.min = null;
  this.stdev = null;
  if (args) {
    if (args.key !== undefined) {
      this.key = args.key;
    }
    if (args.facts !== undefined) {
      this.facts = args.facts;
    }
    if (args.timestamp !== undefined) {
      this.timestamp = args.timestamp;
    }
    if (args.span !== undefined) {
      this.span = args.span;
    }
    if (args.count !== undefined) {
      this.count = args.count;
    }
    if (args.total !== undefined) {
      this.total = args.total;
    }
    if (args.max !== undefined) {
      this.max = args.max;
    }
    if (args.min !== undefined) {
      this.min = args.min;
    }
    if (args.stdev !== undefined) {
      this.stdev = args.stdev;
    }
  }
};
TTimer.prototype = {};
TTimer.prototype.read = function(input) {
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
        this.key = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.MAP) {
        var _size10 = 0;
        var _rtmp314;
        this.facts = {};
        var _ktype11 = 0;
        var _vtype12 = 0;
        _rtmp314 = input.readMapBegin();
        _ktype11 = _rtmp314.ktype;
        _vtype12 = _rtmp314.vtype;
        _size10 = _rtmp314.size;
        for (var _i15 = 0; _i15 < _size10; ++_i15)
        {
          if (_i15 > 0 ) {
            if (input.rstack.length > input.rpos[input.rpos.length -1] + 1) {
              input.rstack.pop();
            }
          }
          var key16 = null;
          var val17 = null;
          key16 = input.readString().value;
          val17 = input.readString().value;
          this.facts[key16] = val17;
        }
        input.readMapEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I64) {
        this.timestamp = input.readI64().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.I32) {
        this.span = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.I64) {
        this.count = input.readI64().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.I64) {
        this.total = input.readI64().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 7:
      if (ftype == Thrift.Type.I64) {
        this.max = input.readI64().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 8:
      if (ftype == Thrift.Type.I64) {
        this.min = input.readI64().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 9:
      if (ftype == Thrift.Type.I64) {
        this.stdev = input.readI64().value;
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

TTimer.prototype.write = function(output) {
  output.writeStructBegin('TTimer');
  if (this.key !== null && this.key !== undefined) {
    output.writeFieldBegin('key', Thrift.Type.STRING, 1);
    output.writeString(this.key);
    output.writeFieldEnd();
  }
  if (this.facts !== null && this.facts !== undefined) {
    output.writeFieldBegin('facts', Thrift.Type.MAP, 2);
    output.writeMapBegin(Thrift.Type.STRING, Thrift.Type.STRING, Thrift.objectLength(this.facts));
    for (var kiter18 in this.facts)
    {
      if (this.facts.hasOwnProperty(kiter18))
      {
        var viter19 = this.facts[kiter18];
        output.writeString(kiter18);
        output.writeString(viter19);
      }
    }
    output.writeMapEnd();
    output.writeFieldEnd();
  }
  if (this.timestamp !== null && this.timestamp !== undefined) {
    output.writeFieldBegin('timestamp', Thrift.Type.I64, 3);
    output.writeI64(this.timestamp);
    output.writeFieldEnd();
  }
  if (this.span !== null && this.span !== undefined) {
    output.writeFieldBegin('span', Thrift.Type.I32, 4);
    output.writeI32(this.span);
    output.writeFieldEnd();
  }
  if (this.count !== null && this.count !== undefined) {
    output.writeFieldBegin('count', Thrift.Type.I64, 5);
    output.writeI64(this.count);
    output.writeFieldEnd();
  }
  if (this.total !== null && this.total !== undefined) {
    output.writeFieldBegin('total', Thrift.Type.I64, 6);
    output.writeI64(this.total);
    output.writeFieldEnd();
  }
  if (this.max !== null && this.max !== undefined) {
    output.writeFieldBegin('max', Thrift.Type.I64, 7);
    output.writeI64(this.max);
    output.writeFieldEnd();
  }
  if (this.min !== null && this.min !== undefined) {
    output.writeFieldBegin('min', Thrift.Type.I64, 8);
    output.writeI64(this.min);
    output.writeFieldEnd();
  }
  if (this.stdev !== null && this.stdev !== undefined) {
    output.writeFieldBegin('stdev', Thrift.Type.I64, 9);
    output.writeI64(this.stdev);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

TGauge = function(args) {
  this.key = null;
  this.facts = null;
  this.timestamp = null;
  this.span = null;
  this.count = null;
  this.mean = null;
  this.max = null;
  this.min = null;
  this.stdev = null;
  if (args) {
    if (args.key !== undefined) {
      this.key = args.key;
    }
    if (args.facts !== undefined) {
      this.facts = args.facts;
    }
    if (args.timestamp !== undefined) {
      this.timestamp = args.timestamp;
    }
    if (args.span !== undefined) {
      this.span = args.span;
    }
    if (args.count !== undefined) {
      this.count = args.count;
    }
    if (args.mean !== undefined) {
      this.mean = args.mean;
    }
    if (args.max !== undefined) {
      this.max = args.max;
    }
    if (args.min !== undefined) {
      this.min = args.min;
    }
    if (args.stdev !== undefined) {
      this.stdev = args.stdev;
    }
  }
};
TGauge.prototype = {};
TGauge.prototype.read = function(input) {
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
        this.key = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.MAP) {
        var _size20 = 0;
        var _rtmp324;
        this.facts = {};
        var _ktype21 = 0;
        var _vtype22 = 0;
        _rtmp324 = input.readMapBegin();
        _ktype21 = _rtmp324.ktype;
        _vtype22 = _rtmp324.vtype;
        _size20 = _rtmp324.size;
        for (var _i25 = 0; _i25 < _size20; ++_i25)
        {
          if (_i25 > 0 ) {
            if (input.rstack.length > input.rpos[input.rpos.length -1] + 1) {
              input.rstack.pop();
            }
          }
          var key26 = null;
          var val27 = null;
          key26 = input.readString().value;
          val27 = input.readString().value;
          this.facts[key26] = val27;
        }
        input.readMapEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I64) {
        this.timestamp = input.readI64().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.I32) {
        this.span = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.I64) {
        this.count = input.readI64().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.I64) {
        this.mean = input.readI64().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 7:
      if (ftype == Thrift.Type.I64) {
        this.max = input.readI64().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 8:
      if (ftype == Thrift.Type.I64) {
        this.min = input.readI64().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 9:
      if (ftype == Thrift.Type.I64) {
        this.stdev = input.readI64().value;
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

TGauge.prototype.write = function(output) {
  output.writeStructBegin('TGauge');
  if (this.key !== null && this.key !== undefined) {
    output.writeFieldBegin('key', Thrift.Type.STRING, 1);
    output.writeString(this.key);
    output.writeFieldEnd();
  }
  if (this.facts !== null && this.facts !== undefined) {
    output.writeFieldBegin('facts', Thrift.Type.MAP, 2);
    output.writeMapBegin(Thrift.Type.STRING, Thrift.Type.STRING, Thrift.objectLength(this.facts));
    for (var kiter28 in this.facts)
    {
      if (this.facts.hasOwnProperty(kiter28))
      {
        var viter29 = this.facts[kiter28];
        output.writeString(kiter28);
        output.writeString(viter29);
      }
    }
    output.writeMapEnd();
    output.writeFieldEnd();
  }
  if (this.timestamp !== null && this.timestamp !== undefined) {
    output.writeFieldBegin('timestamp', Thrift.Type.I64, 3);
    output.writeI64(this.timestamp);
    output.writeFieldEnd();
  }
  if (this.span !== null && this.span !== undefined) {
    output.writeFieldBegin('span', Thrift.Type.I32, 4);
    output.writeI32(this.span);
    output.writeFieldEnd();
  }
  if (this.count !== null && this.count !== undefined) {
    output.writeFieldBegin('count', Thrift.Type.I64, 5);
    output.writeI64(this.count);
    output.writeFieldEnd();
  }
  if (this.mean !== null && this.mean !== undefined) {
    output.writeFieldBegin('mean', Thrift.Type.I64, 6);
    output.writeI64(this.mean);
    output.writeFieldEnd();
  }
  if (this.max !== null && this.max !== undefined) {
    output.writeFieldBegin('max', Thrift.Type.I64, 7);
    output.writeI64(this.max);
    output.writeFieldEnd();
  }
  if (this.min !== null && this.min !== undefined) {
    output.writeFieldBegin('min', Thrift.Type.I64, 8);
    output.writeI64(this.min);
    output.writeFieldEnd();
  }
  if (this.stdev !== null && this.stdev !== undefined) {
    output.writeFieldBegin('stdev', Thrift.Type.I64, 9);
    output.writeI64(this.stdev);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

TTimeFilter = function(args) {
  this.fromTime = null;
  this.toTime = null;
  this.span = 3600000;
  this.maxPoints = null;
  if (args) {
    if (args.fromTime !== undefined) {
      this.fromTime = args.fromTime;
    }
    if (args.toTime !== undefined) {
      this.toTime = args.toTime;
    }
    if (args.span !== undefined) {
      this.span = args.span;
    }
    if (args.maxPoints !== undefined) {
      this.maxPoints = args.maxPoints;
    }
  }
};
TTimeFilter.prototype = {};
TTimeFilter.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.I64) {
        this.fromTime = input.readI64().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I64) {
        this.toTime = input.readI64().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I32) {
        this.span = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.I32) {
        this.maxPoints = input.readI32().value;
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

TTimeFilter.prototype.write = function(output) {
  output.writeStructBegin('TTimeFilter');
  if (this.fromTime !== null && this.fromTime !== undefined) {
    output.writeFieldBegin('fromTime', Thrift.Type.I64, 1);
    output.writeI64(this.fromTime);
    output.writeFieldEnd();
  }
  if (this.toTime !== null && this.toTime !== undefined) {
    output.writeFieldBegin('toTime', Thrift.Type.I64, 2);
    output.writeI64(this.toTime);
    output.writeFieldEnd();
  }
  if (this.span !== null && this.span !== undefined) {
    output.writeFieldBegin('span', Thrift.Type.I32, 3);
    output.writeI32(this.span);
    output.writeFieldEnd();
  }
  if (this.maxPoints !== null && this.maxPoints !== undefined) {
    output.writeFieldBegin('maxPoints', Thrift.Type.I32, 4);
    output.writeI32(this.maxPoints);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

