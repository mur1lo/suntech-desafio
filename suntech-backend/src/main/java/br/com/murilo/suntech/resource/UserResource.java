package br.com.murilo.suntech.resource;

import br.com.murilo.suntech.service.UserService;
import br.com.murilo.suntech.service.dto.UserDto;
import io.swagger.annotations.ApiOperation;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/v1/api/user")
public class UserResource {

    private final Logger log = LoggerFactory.getLogger(UserResource.class);

	@Autowired
	private UserService userService;

    @GetMapping(produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    @ApiOperation(value = "Find all user")
    public ResponseEntity<List<UserDto>> findAll() {
    	List<UserDto> response = null;
    	try {
    		response = this.userService.findAll();
    	}catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
    	return new ResponseEntity<>(response, HttpStatus.OK);
	}


	@PostMapping(produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	@ApiOperation(value = "Save/update a user")
	public ResponseEntity<UserDto> saveUser(@RequestBody UserDto userDto) {
        log.debug("REST request to save User : {}", userDto);
		UserDto response = null;
		try {
			response = this.userService.saveUser(userDto);
		}catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<>(response, HttpStatus.CREATED);
	}

}
