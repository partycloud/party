// Code generated by protoc-gen-go. DO NOT EDIT.
// source: daemon.proto

/*
Package daemon is a generated protocol buffer package.

It is generated from these files:
	daemon.proto

It has these top-level messages:
	Event
	ListServersRequest
	ListServersResponse
	CreateServerRequest
	CreateServerResponse
	StartServerRequest
	StartServerResponse
	StopServerRequest
	StopServerResponse
	Server
	Fileset
	Guild
	ListGuildsRequest
	ListGuildsResponse
	Member
	ListMembersRequest
	ListMembersResponse
*/
package daemon

import proto "github.com/golang/protobuf/proto"
import fmt "fmt"
import math "math"

import (
	context "golang.org/x/net/context"
	grpc "google.golang.org/grpc"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion2 // please upgrade the proto package

type Server_Status int32

const (
	Server_STOPPED  Server_Status = 0
	Server_STARTING Server_Status = 1
	Server_RUNNING  Server_Status = 2
	Server_STOPPING Server_Status = 3
)

var Server_Status_name = map[int32]string{
	0: "STOPPED",
	1: "STARTING",
	2: "RUNNING",
	3: "STOPPING",
}
var Server_Status_value = map[string]int32{
	"STOPPED":  0,
	"STARTING": 1,
	"RUNNING":  2,
	"STOPPING": 3,
}

func (x Server_Status) String() string {
	return proto.EnumName(Server_Status_name, int32(x))
}
func (Server_Status) EnumDescriptor() ([]byte, []int) { return fileDescriptor0, []int{9, 0} }

type Event struct {
	Type string `protobuf:"bytes,1,opt,name=type" json:"type,omitempty"`
}

func (m *Event) Reset()                    { *m = Event{} }
func (m *Event) String() string            { return proto.CompactTextString(m) }
func (*Event) ProtoMessage()               {}
func (*Event) Descriptor() ([]byte, []int) { return fileDescriptor0, []int{0} }

func (m *Event) GetType() string {
	if m != nil {
		return m.Type
	}
	return ""
}

type ListServersRequest struct {
	Page  uint32 `protobuf:"varint,1,opt,name=page" json:"page,omitempty"`
	Limit uint32 `protobuf:"varint,2,opt,name=limit" json:"limit,omitempty"`
}

func (m *ListServersRequest) Reset()                    { *m = ListServersRequest{} }
func (m *ListServersRequest) String() string            { return proto.CompactTextString(m) }
func (*ListServersRequest) ProtoMessage()               {}
func (*ListServersRequest) Descriptor() ([]byte, []int) { return fileDescriptor0, []int{1} }

func (m *ListServersRequest) GetPage() uint32 {
	if m != nil {
		return m.Page
	}
	return 0
}

func (m *ListServersRequest) GetLimit() uint32 {
	if m != nil {
		return m.Limit
	}
	return 0
}

type ListServersResponse struct {
	Servers []*Server `protobuf:"bytes,1,rep,name=servers" json:"servers,omitempty"`
}

func (m *ListServersResponse) Reset()                    { *m = ListServersResponse{} }
func (m *ListServersResponse) String() string            { return proto.CompactTextString(m) }
func (*ListServersResponse) ProtoMessage()               {}
func (*ListServersResponse) Descriptor() ([]byte, []int) { return fileDescriptor0, []int{2} }

func (m *ListServersResponse) GetServers() []*Server {
	if m != nil {
		return m.Servers
	}
	return nil
}

type CreateServerRequest struct {
	Image string `protobuf:"bytes,1,opt,name=image" json:"image,omitempty"`
	Name  string `protobuf:"bytes,2,opt,name=name" json:"name,omitempty"`
}

func (m *CreateServerRequest) Reset()                    { *m = CreateServerRequest{} }
func (m *CreateServerRequest) String() string            { return proto.CompactTextString(m) }
func (*CreateServerRequest) ProtoMessage()               {}
func (*CreateServerRequest) Descriptor() ([]byte, []int) { return fileDescriptor0, []int{3} }

func (m *CreateServerRequest) GetImage() string {
	if m != nil {
		return m.Image
	}
	return ""
}

func (m *CreateServerRequest) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

type CreateServerResponse struct {
	Server *Server `protobuf:"bytes,1,opt,name=server" json:"server,omitempty"`
}

func (m *CreateServerResponse) Reset()                    { *m = CreateServerResponse{} }
func (m *CreateServerResponse) String() string            { return proto.CompactTextString(m) }
func (*CreateServerResponse) ProtoMessage()               {}
func (*CreateServerResponse) Descriptor() ([]byte, []int) { return fileDescriptor0, []int{4} }

func (m *CreateServerResponse) GetServer() *Server {
	if m != nil {
		return m.Server
	}
	return nil
}

type StartServerRequest struct {
	Id string `protobuf:"bytes,1,opt,name=id" json:"id,omitempty"`
}

func (m *StartServerRequest) Reset()                    { *m = StartServerRequest{} }
func (m *StartServerRequest) String() string            { return proto.CompactTextString(m) }
func (*StartServerRequest) ProtoMessage()               {}
func (*StartServerRequest) Descriptor() ([]byte, []int) { return fileDescriptor0, []int{5} }

func (m *StartServerRequest) GetId() string {
	if m != nil {
		return m.Id
	}
	return ""
}

type StartServerResponse struct {
	Server *Server `protobuf:"bytes,1,opt,name=server" json:"server,omitempty"`
}

func (m *StartServerResponse) Reset()                    { *m = StartServerResponse{} }
func (m *StartServerResponse) String() string            { return proto.CompactTextString(m) }
func (*StartServerResponse) ProtoMessage()               {}
func (*StartServerResponse) Descriptor() ([]byte, []int) { return fileDescriptor0, []int{6} }

func (m *StartServerResponse) GetServer() *Server {
	if m != nil {
		return m.Server
	}
	return nil
}

type StopServerRequest struct {
	Id string `protobuf:"bytes,1,opt,name=id" json:"id,omitempty"`
}

func (m *StopServerRequest) Reset()                    { *m = StopServerRequest{} }
func (m *StopServerRequest) String() string            { return proto.CompactTextString(m) }
func (*StopServerRequest) ProtoMessage()               {}
func (*StopServerRequest) Descriptor() ([]byte, []int) { return fileDescriptor0, []int{7} }

func (m *StopServerRequest) GetId() string {
	if m != nil {
		return m.Id
	}
	return ""
}

type StopServerResponse struct {
}

func (m *StopServerResponse) Reset()                    { *m = StopServerResponse{} }
func (m *StopServerResponse) String() string            { return proto.CompactTextString(m) }
func (*StopServerResponse) ProtoMessage()               {}
func (*StopServerResponse) Descriptor() ([]byte, []int) { return fileDescriptor0, []int{8} }

type Server struct {
	Id             string        `protobuf:"bytes,1,opt,name=id" json:"id,omitempty"`
	Name           string        `protobuf:"bytes,2,opt,name=name" json:"name,omitempty"`
	Image          string        `protobuf:"bytes,3,opt,name=image" json:"image,omitempty"`
	CurrentOwnerId string        `protobuf:"bytes,4,opt,name=current_owner_id,json=currentOwnerId" json:"current_owner_id,omitempty"`
	Fileset        *Fileset      `protobuf:"bytes,5,opt,name=fileset" json:"fileset,omitempty"`
	Status         Server_Status `protobuf:"varint,6,opt,name=status,enum=daemon.Server_Status" json:"status,omitempty"`
}

func (m *Server) Reset()                    { *m = Server{} }
func (m *Server) String() string            { return proto.CompactTextString(m) }
func (*Server) ProtoMessage()               {}
func (*Server) Descriptor() ([]byte, []int) { return fileDescriptor0, []int{9} }

func (m *Server) GetId() string {
	if m != nil {
		return m.Id
	}
	return ""
}

func (m *Server) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func (m *Server) GetImage() string {
	if m != nil {
		return m.Image
	}
	return ""
}

func (m *Server) GetCurrentOwnerId() string {
	if m != nil {
		return m.CurrentOwnerId
	}
	return ""
}

func (m *Server) GetFileset() *Fileset {
	if m != nil {
		return m.Fileset
	}
	return nil
}

func (m *Server) GetStatus() Server_Status {
	if m != nil {
		return m.Status
	}
	return Server_STOPPED
}

type Fileset struct {
	Hash  []byte `protobuf:"bytes,1,opt,name=hash,proto3" json:"hash,omitempty"`
	Bytes int64  `protobuf:"varint,3,opt,name=bytes" json:"bytes,omitempty"`
}

func (m *Fileset) Reset()                    { *m = Fileset{} }
func (m *Fileset) String() string            { return proto.CompactTextString(m) }
func (*Fileset) ProtoMessage()               {}
func (*Fileset) Descriptor() ([]byte, []int) { return fileDescriptor0, []int{10} }

func (m *Fileset) GetHash() []byte {
	if m != nil {
		return m.Hash
	}
	return nil
}

func (m *Fileset) GetBytes() int64 {
	if m != nil {
		return m.Bytes
	}
	return 0
}

type Guild struct {
	Id        string `protobuf:"bytes,1,opt,name=id" json:"id,omitempty"`
	Name      string `protobuf:"bytes,2,opt,name=name" json:"name,omitempty"`
	Connected bool   `protobuf:"varint,3,opt,name=connected" json:"connected,omitempty"`
	Ip        string `protobuf:"bytes,4,opt,name=ip" json:"ip,omitempty"`
}

func (m *Guild) Reset()                    { *m = Guild{} }
func (m *Guild) String() string            { return proto.CompactTextString(m) }
func (*Guild) ProtoMessage()               {}
func (*Guild) Descriptor() ([]byte, []int) { return fileDescriptor0, []int{11} }

func (m *Guild) GetId() string {
	if m != nil {
		return m.Id
	}
	return ""
}

func (m *Guild) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func (m *Guild) GetConnected() bool {
	if m != nil {
		return m.Connected
	}
	return false
}

func (m *Guild) GetIp() string {
	if m != nil {
		return m.Ip
	}
	return ""
}

type ListGuildsRequest struct {
	Page  uint32 `protobuf:"varint,1,opt,name=page" json:"page,omitempty"`
	Limit uint32 `protobuf:"varint,2,opt,name=limit" json:"limit,omitempty"`
}

func (m *ListGuildsRequest) Reset()                    { *m = ListGuildsRequest{} }
func (m *ListGuildsRequest) String() string            { return proto.CompactTextString(m) }
func (*ListGuildsRequest) ProtoMessage()               {}
func (*ListGuildsRequest) Descriptor() ([]byte, []int) { return fileDescriptor0, []int{12} }

func (m *ListGuildsRequest) GetPage() uint32 {
	if m != nil {
		return m.Page
	}
	return 0
}

func (m *ListGuildsRequest) GetLimit() uint32 {
	if m != nil {
		return m.Limit
	}
	return 0
}

type ListGuildsResponse struct {
	Guilds []*Guild `protobuf:"bytes,1,rep,name=guilds" json:"guilds,omitempty"`
}

func (m *ListGuildsResponse) Reset()                    { *m = ListGuildsResponse{} }
func (m *ListGuildsResponse) String() string            { return proto.CompactTextString(m) }
func (*ListGuildsResponse) ProtoMessage()               {}
func (*ListGuildsResponse) Descriptor() ([]byte, []int) { return fileDescriptor0, []int{13} }

func (m *ListGuildsResponse) GetGuilds() []*Guild {
	if m != nil {
		return m.Guilds
	}
	return nil
}

type Member struct {
	Id   string `protobuf:"bytes,1,opt,name=id" json:"id,omitempty"`
	Name string `protobuf:"bytes,2,opt,name=name" json:"name,omitempty"`
	Ip   string `protobuf:"bytes,3,opt,name=ip" json:"ip,omitempty"`
}

func (m *Member) Reset()                    { *m = Member{} }
func (m *Member) String() string            { return proto.CompactTextString(m) }
func (*Member) ProtoMessage()               {}
func (*Member) Descriptor() ([]byte, []int) { return fileDescriptor0, []int{14} }

func (m *Member) GetId() string {
	if m != nil {
		return m.Id
	}
	return ""
}

func (m *Member) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func (m *Member) GetIp() string {
	if m != nil {
		return m.Ip
	}
	return ""
}

type ListMembersRequest struct {
	Page  uint32 `protobuf:"varint,1,opt,name=page" json:"page,omitempty"`
	Limit uint32 `protobuf:"varint,2,opt,name=limit" json:"limit,omitempty"`
}

func (m *ListMembersRequest) Reset()                    { *m = ListMembersRequest{} }
func (m *ListMembersRequest) String() string            { return proto.CompactTextString(m) }
func (*ListMembersRequest) ProtoMessage()               {}
func (*ListMembersRequest) Descriptor() ([]byte, []int) { return fileDescriptor0, []int{15} }

func (m *ListMembersRequest) GetPage() uint32 {
	if m != nil {
		return m.Page
	}
	return 0
}

func (m *ListMembersRequest) GetLimit() uint32 {
	if m != nil {
		return m.Limit
	}
	return 0
}

type ListMembersResponse struct {
	Members []*Member `protobuf:"bytes,1,rep,name=members" json:"members,omitempty"`
}

func (m *ListMembersResponse) Reset()                    { *m = ListMembersResponse{} }
func (m *ListMembersResponse) String() string            { return proto.CompactTextString(m) }
func (*ListMembersResponse) ProtoMessage()               {}
func (*ListMembersResponse) Descriptor() ([]byte, []int) { return fileDescriptor0, []int{16} }

func (m *ListMembersResponse) GetMembers() []*Member {
	if m != nil {
		return m.Members
	}
	return nil
}

func init() {
	proto.RegisterType((*Event)(nil), "daemon.Event")
	proto.RegisterType((*ListServersRequest)(nil), "daemon.ListServersRequest")
	proto.RegisterType((*ListServersResponse)(nil), "daemon.ListServersResponse")
	proto.RegisterType((*CreateServerRequest)(nil), "daemon.CreateServerRequest")
	proto.RegisterType((*CreateServerResponse)(nil), "daemon.CreateServerResponse")
	proto.RegisterType((*StartServerRequest)(nil), "daemon.StartServerRequest")
	proto.RegisterType((*StartServerResponse)(nil), "daemon.StartServerResponse")
	proto.RegisterType((*StopServerRequest)(nil), "daemon.StopServerRequest")
	proto.RegisterType((*StopServerResponse)(nil), "daemon.StopServerResponse")
	proto.RegisterType((*Server)(nil), "daemon.Server")
	proto.RegisterType((*Fileset)(nil), "daemon.Fileset")
	proto.RegisterType((*Guild)(nil), "daemon.Guild")
	proto.RegisterType((*ListGuildsRequest)(nil), "daemon.ListGuildsRequest")
	proto.RegisterType((*ListGuildsResponse)(nil), "daemon.ListGuildsResponse")
	proto.RegisterType((*Member)(nil), "daemon.Member")
	proto.RegisterType((*ListMembersRequest)(nil), "daemon.ListMembersRequest")
	proto.RegisterType((*ListMembersResponse)(nil), "daemon.ListMembersResponse")
	proto.RegisterEnum("daemon.Server_Status", Server_Status_name, Server_Status_value)
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// Client API for Daemon service

type DaemonClient interface {
	Events(ctx context.Context, opts ...grpc.CallOption) (Daemon_EventsClient, error)
	CreateServer(ctx context.Context, in *CreateServerRequest, opts ...grpc.CallOption) (*CreateServerResponse, error)
	StartServer(ctx context.Context, in *StartServerRequest, opts ...grpc.CallOption) (*StartServerResponse, error)
	StopServer(ctx context.Context, in *StopServerRequest, opts ...grpc.CallOption) (*StopServerResponse, error)
	ListServers(ctx context.Context, in *ListServersRequest, opts ...grpc.CallOption) (*ListServersResponse, error)
	ListGuilds(ctx context.Context, in *ListGuildsRequest, opts ...grpc.CallOption) (*ListGuildsResponse, error)
	ListMembers(ctx context.Context, in *ListMembersRequest, opts ...grpc.CallOption) (*ListMembersResponse, error)
}

type daemonClient struct {
	cc *grpc.ClientConn
}

func NewDaemonClient(cc *grpc.ClientConn) DaemonClient {
	return &daemonClient{cc}
}

func (c *daemonClient) Events(ctx context.Context, opts ...grpc.CallOption) (Daemon_EventsClient, error) {
	stream, err := grpc.NewClientStream(ctx, &_Daemon_serviceDesc.Streams[0], c.cc, "/daemon.Daemon/Events", opts...)
	if err != nil {
		return nil, err
	}
	x := &daemonEventsClient{stream}
	return x, nil
}

type Daemon_EventsClient interface {
	Send(*Event) error
	Recv() (*Event, error)
	grpc.ClientStream
}

type daemonEventsClient struct {
	grpc.ClientStream
}

func (x *daemonEventsClient) Send(m *Event) error {
	return x.ClientStream.SendMsg(m)
}

func (x *daemonEventsClient) Recv() (*Event, error) {
	m := new(Event)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

func (c *daemonClient) CreateServer(ctx context.Context, in *CreateServerRequest, opts ...grpc.CallOption) (*CreateServerResponse, error) {
	out := new(CreateServerResponse)
	err := grpc.Invoke(ctx, "/daemon.Daemon/CreateServer", in, out, c.cc, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *daemonClient) StartServer(ctx context.Context, in *StartServerRequest, opts ...grpc.CallOption) (*StartServerResponse, error) {
	out := new(StartServerResponse)
	err := grpc.Invoke(ctx, "/daemon.Daemon/StartServer", in, out, c.cc, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *daemonClient) StopServer(ctx context.Context, in *StopServerRequest, opts ...grpc.CallOption) (*StopServerResponse, error) {
	out := new(StopServerResponse)
	err := grpc.Invoke(ctx, "/daemon.Daemon/StopServer", in, out, c.cc, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *daemonClient) ListServers(ctx context.Context, in *ListServersRequest, opts ...grpc.CallOption) (*ListServersResponse, error) {
	out := new(ListServersResponse)
	err := grpc.Invoke(ctx, "/daemon.Daemon/ListServers", in, out, c.cc, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *daemonClient) ListGuilds(ctx context.Context, in *ListGuildsRequest, opts ...grpc.CallOption) (*ListGuildsResponse, error) {
	out := new(ListGuildsResponse)
	err := grpc.Invoke(ctx, "/daemon.Daemon/ListGuilds", in, out, c.cc, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *daemonClient) ListMembers(ctx context.Context, in *ListMembersRequest, opts ...grpc.CallOption) (*ListMembersResponse, error) {
	out := new(ListMembersResponse)
	err := grpc.Invoke(ctx, "/daemon.Daemon/ListMembers", in, out, c.cc, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// Server API for Daemon service

type DaemonServer interface {
	Events(Daemon_EventsServer) error
	CreateServer(context.Context, *CreateServerRequest) (*CreateServerResponse, error)
	StartServer(context.Context, *StartServerRequest) (*StartServerResponse, error)
	StopServer(context.Context, *StopServerRequest) (*StopServerResponse, error)
	ListServers(context.Context, *ListServersRequest) (*ListServersResponse, error)
	ListGuilds(context.Context, *ListGuildsRequest) (*ListGuildsResponse, error)
	ListMembers(context.Context, *ListMembersRequest) (*ListMembersResponse, error)
}

func RegisterDaemonServer(s *grpc.Server, srv DaemonServer) {
	s.RegisterService(&_Daemon_serviceDesc, srv)
}

func _Daemon_Events_Handler(srv interface{}, stream grpc.ServerStream) error {
	return srv.(DaemonServer).Events(&daemonEventsServer{stream})
}

type Daemon_EventsServer interface {
	Send(*Event) error
	Recv() (*Event, error)
	grpc.ServerStream
}

type daemonEventsServer struct {
	grpc.ServerStream
}

func (x *daemonEventsServer) Send(m *Event) error {
	return x.ServerStream.SendMsg(m)
}

func (x *daemonEventsServer) Recv() (*Event, error) {
	m := new(Event)
	if err := x.ServerStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

func _Daemon_CreateServer_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateServerRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DaemonServer).CreateServer(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/daemon.Daemon/CreateServer",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DaemonServer).CreateServer(ctx, req.(*CreateServerRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Daemon_StartServer_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(StartServerRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DaemonServer).StartServer(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/daemon.Daemon/StartServer",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DaemonServer).StartServer(ctx, req.(*StartServerRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Daemon_StopServer_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(StopServerRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DaemonServer).StopServer(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/daemon.Daemon/StopServer",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DaemonServer).StopServer(ctx, req.(*StopServerRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Daemon_ListServers_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListServersRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DaemonServer).ListServers(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/daemon.Daemon/ListServers",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DaemonServer).ListServers(ctx, req.(*ListServersRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Daemon_ListGuilds_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListGuildsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DaemonServer).ListGuilds(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/daemon.Daemon/ListGuilds",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DaemonServer).ListGuilds(ctx, req.(*ListGuildsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Daemon_ListMembers_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListMembersRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DaemonServer).ListMembers(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/daemon.Daemon/ListMembers",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DaemonServer).ListMembers(ctx, req.(*ListMembersRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _Daemon_serviceDesc = grpc.ServiceDesc{
	ServiceName: "daemon.Daemon",
	HandlerType: (*DaemonServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "CreateServer",
			Handler:    _Daemon_CreateServer_Handler,
		},
		{
			MethodName: "StartServer",
			Handler:    _Daemon_StartServer_Handler,
		},
		{
			MethodName: "StopServer",
			Handler:    _Daemon_StopServer_Handler,
		},
		{
			MethodName: "ListServers",
			Handler:    _Daemon_ListServers_Handler,
		},
		{
			MethodName: "ListGuilds",
			Handler:    _Daemon_ListGuilds_Handler,
		},
		{
			MethodName: "ListMembers",
			Handler:    _Daemon_ListMembers_Handler,
		},
	},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "Events",
			Handler:       _Daemon_Events_Handler,
			ServerStreams: true,
			ClientStreams: true,
		},
	},
	Metadata: "daemon.proto",
}

func init() { proto.RegisterFile("daemon.proto", fileDescriptor0) }

var fileDescriptor0 = []byte{
	// 631 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x9c, 0x55, 0xdd, 0x6e, 0xd3, 0x4c,
	0x10, 0x8d, 0xed, 0xc6, 0x69, 0xa6, 0x69, 0xbe, 0x76, 0x9b, 0x4f, 0x32, 0x6e, 0x2f, 0xa2, 0xe5,
	0x47, 0x46, 0x82, 0x08, 0xa5, 0x97, 0xd0, 0x20, 0x44, 0x43, 0xa9, 0x80, 0x24, 0x5a, 0x87, 0x0b,
	0xae, 0x2a, 0x27, 0x5e, 0x5a, 0x4b, 0xf1, 0x0f, 0xde, 0x4d, 0x51, 0x5f, 0x80, 0xd7, 0xe5, 0x15,
	0x90, 0x77, 0xd7, 0x71, 0x9c, 0x58, 0xa8, 0xf4, 0xce, 0x33, 0x67, 0x76, 0xe6, 0xcc, 0x64, 0xce,
	0x04, 0x5a, 0xbe, 0x47, 0xc3, 0x38, 0xea, 0x25, 0x69, 0xcc, 0x63, 0x64, 0x4a, 0x0b, 0x1f, 0x43,
	0x7d, 0x78, 0x4b, 0x23, 0x8e, 0x10, 0xec, 0xf0, 0xbb, 0x84, 0x5a, 0x5a, 0x57, 0x73, 0x9a, 0x44,
	0x7c, 0xe3, 0x01, 0xa0, 0xcf, 0x01, 0xe3, 0x2e, 0x4d, 0x6f, 0x69, 0xca, 0x08, 0xfd, 0xb1, 0xa4,
	0x4c, 0x44, 0x26, 0xde, 0xb5, 0x8c, 0xdc, 0x27, 0xe2, 0x1b, 0x75, 0xa0, 0xbe, 0x08, 0xc2, 0x80,
	0x5b, 0xba, 0x70, 0x4a, 0x03, 0xbf, 0x85, 0xa3, 0xd2, 0x7b, 0x96, 0xc4, 0x11, 0xa3, 0xc8, 0x81,
	0x06, 0x93, 0x2e, 0x4b, 0xeb, 0x1a, 0xce, 0x5e, 0xbf, 0xdd, 0x53, 0xdc, 0x64, 0x24, 0xc9, 0xe1,
	0x2c, 0xc1, 0xfb, 0x94, 0x7a, 0x9c, 0x2a, 0x40, 0x31, 0xe8, 0x40, 0x3d, 0x08, 0x73, 0x0a, 0x4d,
	0x22, 0x8d, 0x8c, 0x57, 0xe4, 0x85, 0x54, 0x50, 0x68, 0x12, 0xf1, 0x8d, 0x07, 0xd0, 0x29, 0x27,
	0x50, 0x14, 0x9e, 0x81, 0x29, 0x6b, 0x88, 0x14, 0xdb, 0x0c, 0x14, 0x8a, 0x9f, 0x00, 0x72, 0xb9,
	0x97, 0xf2, 0x72, 0xfd, 0x36, 0xe8, 0x81, 0xaf, 0x8a, 0xeb, 0x81, 0x8f, 0xcf, 0xe0, 0xa8, 0x14,
	0xf5, 0x8f, 0x45, 0x1e, 0xc3, 0xa1, 0xcb, 0xe3, 0xe4, 0xef, 0x35, 0x3a, 0x19, 0x93, 0x22, 0x48,
	0x96, 0xc0, 0xbf, 0x74, 0x30, 0xa5, 0x6b, 0xf3, 0x41, 0xd5, 0x38, 0x8a, 0xc1, 0x19, 0xeb, 0x83,
	0x73, 0xe0, 0x60, 0xbe, 0x4c, 0x53, 0x1a, 0xf1, 0xab, 0xf8, 0x67, 0x44, 0xd3, 0xab, 0xc0, 0xb7,
	0x76, 0x44, 0x40, 0x5b, 0xf9, 0xc7, 0x99, 0xfb, 0xd2, 0x47, 0xcf, 0xa1, 0xf1, 0x3d, 0x58, 0x50,
	0x46, 0xb9, 0x55, 0x17, 0x2d, 0xfd, 0x97, 0xb7, 0xf4, 0x41, 0xba, 0x49, 0x8e, 0xa3, 0x97, 0x60,
	0x32, 0xee, 0xf1, 0x25, 0xb3, 0xcc, 0xae, 0xe6, 0xb4, 0xfb, 0xff, 0x97, 0x9b, 0xef, 0xb9, 0x02,
	0x24, 0x2a, 0x08, 0x0f, 0xc0, 0x94, 0x1e, 0xb4, 0x07, 0x0d, 0x77, 0x3a, 0x9e, 0x4c, 0x86, 0xe7,
	0x07, 0x35, 0xd4, 0x82, 0x5d, 0x77, 0xfa, 0x8e, 0x4c, 0x2f, 0x47, 0x17, 0x07, 0x5a, 0x06, 0x91,
	0xaf, 0xa3, 0x51, 0x66, 0xe8, 0x12, 0x1a, 0x4f, 0x26, 0x99, 0x65, 0xe0, 0x53, 0x68, 0x28, 0x0a,
	0x59, 0xe3, 0x37, 0x1e, 0xbb, 0x11, 0xa3, 0x68, 0x11, 0xf1, 0x9d, 0x35, 0x3e, 0xbb, 0xe3, 0x94,
	0x89, 0xc6, 0x0d, 0x22, 0x0d, 0xfc, 0x0d, 0xea, 0x17, 0xcb, 0x60, 0xe1, 0xdf, 0x6b, 0x76, 0x27,
	0xd0, 0x9c, 0xc7, 0x51, 0x44, 0xe7, 0x9c, 0xfa, 0x22, 0xcd, 0x2e, 0x29, 0x1c, 0x22, 0x43, 0xa2,
	0xa6, 0xa6, 0x07, 0x09, 0x3e, 0x83, 0xc3, 0x6c, 0xf5, 0x45, 0xfa, 0x07, 0x28, 0xe7, 0xb5, 0x54,
	0x5e, 0xfe, 0x5c, 0x2d, 0xd4, 0x53, 0x30, 0xaf, 0x85, 0x47, 0xe9, 0x66, 0x3f, 0x9f, 0xa9, 0x88,
	0x23, 0x0a, 0xc4, 0x6f, 0xc0, 0xfc, 0x42, 0xc3, 0xd9, 0x3d, 0x77, 0x42, 0x32, 0x37, 0x56, 0xcc,
	0x95, 0xe8, 0x65, 0x86, 0x87, 0x8b, 0x7e, 0xf5, 0xbe, 0x10, 0x7d, 0x28, 0x5d, 0x9b, 0xa2, 0x97,
	0x91, 0x24, 0x87, 0xfb, 0xbf, 0x0d, 0x30, 0xcf, 0x05, 0x84, 0x5e, 0x80, 0x29, 0xae, 0x13, 0x43,
	0xab, 0x56, 0x85, 0x6d, 0x97, 0x4d, 0x5c, 0x73, 0xb4, 0x57, 0x1a, 0xfa, 0x04, 0xad, 0x75, 0xb1,
	0xa3, 0xe3, 0x3c, 0xa8, 0xe2, 0x86, 0xd8, 0x27, 0xd5, 0xa0, 0xd2, 0x55, 0x0d, 0x7d, 0x84, 0xbd,
	0x35, 0x4d, 0x23, 0x7b, 0xb5, 0xbe, 0x5b, 0xe7, 0xc0, 0x3e, 0xae, 0xc4, 0x56, 0x99, 0x86, 0x00,
	0x85, 0x72, 0xd1, 0xa3, 0x22, 0x78, 0x43, 0xf2, 0xb6, 0x5d, 0x05, 0xad, 0x13, 0x5a, 0x3b, 0xa6,
	0x05, 0xa1, 0xed, 0x0b, 0x5d, 0x10, 0xaa, 0xb8, 0xbe, 0x92, 0x50, 0xb1, 0x5c, 0x05, 0xa1, 0xad,
	0x7d, 0xb5, 0xed, 0x2a, 0x68, 0x93, 0x90, 0xfa, 0xa1, 0xcb, 0x84, 0xca, 0xdb, 0x53, 0x26, 0xb4,
	0xb1, 0x19, 0xb8, 0x36, 0x33, 0xc5, 0x7f, 0xd2, 0xe9, 0x9f, 0x00, 0x00, 0x00, 0xff, 0xff, 0x39,
	0x8a, 0xf3, 0x0a, 0xa3, 0x06, 0x00, 0x00,
}