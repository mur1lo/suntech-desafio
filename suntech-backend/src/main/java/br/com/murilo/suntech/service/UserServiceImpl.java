package br.com.murilo.suntech.service;

import br.com.murilo.suntech.domain.UserDto;
import br.com.murilo.suntech.domain.UserMapper;
import br.com.murilo.suntech.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    UserMapper userMapper;

    @Override
    public List<UserDto> findAll() {
        return userMapper.toDto(this.userRepository.findAll());
    }

    @Override
    public UserDto saveUser(UserDto userDto) {
        /*this.userRepository.save(userDto);*/
        return null;
    }
}
