package br.com.murilo.suntech.service.mapper;

import br.com.murilo.suntech.domain.User;
import br.com.murilo.suntech.service.dto.UserDto;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring", uses = {})
public interface UserMapper extends EntityMapper<UserDto, User> {


}
